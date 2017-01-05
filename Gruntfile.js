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
                    src: '/app/',
                    cwd: 'dist/',
                    dot: true,
                    dest: '/build/artifacts/'
                }]
            }
        },

        protractor: {
            options: {
                // Location of your protractor config file
                configFile: "e2e-tests/protractor.conf.js",

                // Do you want the output to use fun colors?
                noColor: false,

                // Set to true if you would like to use the Protractor command line debugging tool
                // debug: true,

                // Additional arguments that are passed to the webdriver command
                args: { }
            },
            e2e: {
                options: {
                    // Stops Grunt process if a test fails
                    keepAlive: false
                }
            },
            continuous: {
                options: {
                    keepAlive: true
                }
            }
        },

        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            },
            test: {
                options: {
                    // set the location of the application files
                    base: ['app']
                }
            }
        }




    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('e2e-test', ['connect:test', 'protractor:e2e']);
    grunt.registerTask('testbuild', ['karma:continuous', 'protractor']);
    grunt.registerTask('cibuild', ['karma:continuous', 'compress' , 'uglify']);


}



