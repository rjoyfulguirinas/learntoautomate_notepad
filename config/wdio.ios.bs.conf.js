import { config } from './wdio.shared.conf';

//Browserstack Credentials
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

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
        'appium:app': 'bs://97650ec227f384d2ab4a66d3cf1530985f8dc70a',
        'appium:autoGrantPermissions': true
    }
];

config.services = ['browserstack'];

exports.config = config;