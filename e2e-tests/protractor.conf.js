//jshint strict: false
exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        'test.conf.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8000/',
    directConnect: true,
    getPageTimeout : 200000,
    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};
