var assert = require('assert'),
    fs = require('fs'),
    path = require('path'),
    webdriver = require('selenium-webdriver');

exports.World = function World(callback) {

    this.driver = null;

    this._takeScreenshot = function(callback) {
        this.driver.takeScreenshot().then(function(data) {
            var filename = new Date().toString() + '.png';
            var file = path.join(process.cwd(), filename);
            fs.writeFileSync(file, data, 'base64');
            if (callback)  callback();
        });
    };

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

    this.goto = function(url, callback) {
        this.driver.get(url).then(function() {
            callback();
        });
    };

    this.init = function(callback) {
        this.driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.phantomjs())
            .build();
        callback();
    };

    this.isElementVisible = function(name, callback) {
        this.element(name).then(function(elem) {
            callback(true);
        }, function(err) {
            callback(false);
        });
    };

    this.title = function(callback) {
        this.driver.getTitle().then(callback);
    };

    callback();

};
