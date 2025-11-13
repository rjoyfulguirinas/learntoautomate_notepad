import { config } from './wdio.shared.conf';
const path = require('path');


// Runner Configuration
// ====================
// WebdriverIO supports running e2e tests as well as unit and component tests.
config.port =  4723,

//specs
config.specs = [
    '../test/specs/android/add-note-screen.spec.js'
];

//capabilities
config.capabilities = [
    {
        platformName: 'Android',
        'appium:platformVersion': '16.0',
        'appium:deviceName': 'Pixel 3',
        'appium:automationName': 'UIAutomator2',
        'appium:app': 'app/android/ColorNote+Notepad.apk',
        'appium:autoGrantPermissions': true
    }
];

exports.config = config;