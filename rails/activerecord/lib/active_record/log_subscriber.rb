module ActiveRecord
  class LogSubscriber < ActiveSupport::LogSubscriber
    IGNORE_PAYLOAD_NAMES = ["SCHEMA", "EXPLAIN"]

    def self.runtime=(value)
      ActiveRecord::RuntimeRegistry.sql_runtime = value
    end

    def self.runtime
      ActiveRecord::RuntimeRegistry.sql_runtime ||= 0
    end

    def self.reset_runtime
      rt, self.runtime = runtime, 0
      rt
    end

    def initialize
      super
      @odd = false
    end

    def render_bind(attribute)
      value = if attribute.type.binary? && attribute.value
        "<#{attribute.value.bytesize} bytes of binary data>"
      else
        attribute.value_for_database
      end

      [attribute.name, value]
    end

    def sql(event)
      return unless logger.debug?

      self.class.runtime += event.duration

      payload = event.payload

      return if IGNORE_PAYLOAD_NAMES.include?(payload[:name])

      name  = "#{payload[:name]} (#{event.duration.round(1)}ms)"
      sql   = payload[:sql]
      binds = nil

      unless (payload[:binds] || []).empty?
        binds = "  " + payload[:binds].map { |attr| render_bind(attr) }.inspect
      end

      if odd?
        name = color(name, CYAN, true)
        sql  = color(sql, nil, true)
      else
        name = color(name, MAGENTA, true)
      end

      debug "  #{name}  #{sql}#{binds}"
    end

    def odd?
      @odd = !@odd
    end

    def logger
      ActiveRecord::Base.logger
    end
  end
end

ActiveRecord::LogSubscriber.attach_to :active_record
