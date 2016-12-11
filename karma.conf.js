//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      './bower_components/angular/angular.js',
      './bower_components/angular-route/angular-route.js',
      './bower_components/angular-mocks/angular-mocks.js',
      './assets/ui-bootstrap-tpls-2.3.0.min.js',
        './services/TestServices.js',
        './test/tests.js',
        'app.js',
        './test/test-unit-test.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
