//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '',

    files: [
<<<<<<< HEAD
      './bower_components/angular/angular.js',
      './bower_components/angular-route/angular-route.js',
      './bower_components/angular-mocks/angular-mocks.js',
      './assets/ui-bootstrap-tpls-2.3.0.min.js',
    /*    './services/TestServices.js',
        './test/tests.js',
        'app.js',
        './test/test-unit-test.js'*/
=======
      'app/bower_components/angular/angular.js',
        '/node-modules/*/base.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/assets/ui-bootstrap-tpls-2.3.0.min.js',
        'app/services/TestServices.js',
        'app/test/test.js',
      'app/test/test-unit-test.js',
        'app/unit-tests/login-test.js',
        'app/app.js'

>>>>>>> 8338d76b9479c6da163350af217c4a9d99195ff4
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

      reporters: ['progress'],


    browsers: ['PhantomJS'],

      singlerun: false,

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
        'karma-phantomjs-launcher'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
