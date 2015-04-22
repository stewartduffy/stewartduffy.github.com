require 'rake'

# Load Rails Rakefile extensions
%w(
  annotations
  framework
  initializers
  log
  middleware
  misc
  restart
  routes
  statistics
  tmp
).each do |task|
  load "rails/tasks/#{task}.rake"
end
