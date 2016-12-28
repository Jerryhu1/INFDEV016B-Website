/**
 * Created by Jerry on 12/6/2016.
 */
module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'app/*/*.js',
                dest: 'build/tests.min.js'
            }
        },

        karma: {
            options: {
                // point all tasks to karma config file
                configFile: 'karma.conf.js'
            },
            unit: {
                // run tests once instead of continuously
                singleRun: true
            },
            continuous: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS'],
                reporters: ['dots', 'junit'],
                junitReporter: {
                    outputFile: '/test-results/test-results.xml'
                }
            }
        },

    compress: {
            main: {
                options: {
                    mode: 'tgz',
                    archive: 'target/EnglishTestApp.tgz'
                },
                files: [{
                    expand: true,
                    src: '/build',
                    cwd: 'dist/',
                    dot: true,
                    dest: '/build/artifacts/'
                }]
            }
        },


    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-compress');

    // Default task.
    grunt.registerTask('default', 'karma');
    grunt.registerTask('default', 'compress');


    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('cibuild', ['karma:continuous', 'default', 'compress']);
    grunt.registerTask('default', ['uglify']);

}



