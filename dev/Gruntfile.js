// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'app/scss/**/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'app/css/main.css': 'app/scss/base.scss'
                }
            },
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // define default task
    grunt.registerTask('default', ['watch']);
};