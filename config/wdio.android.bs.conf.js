require('dotenv').config()
import { config } from './wdio.shared.conf';

//Browserstack Credentials
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;


//specs
config.specs = [
    '../test/specs/android/add-note-screen.spec.js'
];

//capabilities
config.capabilities = [
    {
        platformName: 'Android',
        'appium:platformVersion': '15.0',
        'appium:deviceName': 'Samsung Galaxy S25 Ultra',
        'appium:automationName': 'UIAutomator2',
        'appium:app': 'bs://97650ec227f384d2ab4a66d3cf1530985f8dc70a',
        'appium:autoGrantPermissions': true
    }
];

config.services = ['browserstack'];

exports.config = config;