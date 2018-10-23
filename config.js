"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
exports.config = {
    framework: 'jasmine',
    allScriptsTimeout: 5000,
    capabilities: { 'browserName': 'chrome' },
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.manage().timeouts().setScriptTimeout(150000); //implicit wait
    },
    specs: ['spec.js'],
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 20000 //spec timeout
    }
};
//# sourceMappingURL=config.js.map