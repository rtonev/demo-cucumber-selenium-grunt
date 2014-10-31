var assert = require('assert'),
    fs = require('fs'),
    path = require('path'),
    webdriver = require('selenium-webdriver');

var ROOT_URL = 'http://google.com/en';

exports.World = function World(callback) {

    this.driver = null;

    this.assertIsElementVisible = function(name, callback) {
        this.isElementVisible(name, function(visible) {
            assert(visible);
            callback();
        });
    };

    this.element = function(name) {
        return this.driver.findElement(webdriver.By.name(name));
    };

    this.elementClick = function(name, callback) {
        this.element(name).click().then(function() {
            callback();
        });
    };

    this.elementInput = function(name, value, callback) {
        this.element(name).sendKeys(value).then(function() {
            callback();
        });
    };

    this.gotoGoogle = function(callback) {
        this.driver =
            new webdriver.Builder()
                .withCapabilities(webdriver.Capabilities.phantomjs())
                .build();
        this.driver.get(ROOT_URL).then(function() {
            callback();
        });
    };

    this.isElementVisible = function(name, callback) {
        this.element(name).then(function(elem) {
            callback(true);
        }, function(err) {
            callback(false);
        });
    };

    this.takeScreenshot = function(callback) {
        this.driver.takeScreenshot().then(function(data) {
            var filename = new Date().toString() + '.png';
            var file = path.join(process.cwd(), filename);
            fs.writeFileSync(file, data, 'base64');
            if (callback)  callback();
        });
    };

    this.title = function(callback) {
        this.driver.getTitle().then(callback);
    };

    callback();

};
