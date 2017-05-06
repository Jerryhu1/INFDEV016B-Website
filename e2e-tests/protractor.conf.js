//jshint strict: false
exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        'test.conf.js'
    ],

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--disable-web-security', '--user-data-dir=~/.e2e-chrome-profile']
        }
    },

    baseUrl: 'http://localhost:8000/',
    directConnect: true,
    getPageTimeout : 200000,
    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};
