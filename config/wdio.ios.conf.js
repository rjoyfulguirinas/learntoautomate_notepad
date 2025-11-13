import { config } from './wdio.shared.conf';
const path = require('path');


// Runner Configuration
// ====================
// WebdriverIO supports running e2e tests as well as unit and component tests.
config.port =  4723,

//specs
config.specs = [
    '../test/specs/ios/ios-todo-list-add-screen.spec*.js'
];

//capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        'appium:platformVersion': '26.1',
        'appium:deviceName': 'iPhone 17',
        'appium:automationName': 'XCUITest',
        'appium:app': '/Users/risajoyfulguirinas/wdio-appium/app/iOS/MVCTodo.app',
        'appium:autoGrantPermissions': true
    }
];

exports.config = config;