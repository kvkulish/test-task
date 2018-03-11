

let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['*.spec.js'],
  multiCapabilities: [/*{
    browserName: 'firefox'
  },*/{
    browserName: 'chrome'
  }],
	jasmineNodeOpts: {
	    showColors: true,
	    defaultTimeoutInterval: 120000,
	    includeStackTrace : true,
	    isVerbose : true,
	    print: function () {}
	},
	onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  }
}