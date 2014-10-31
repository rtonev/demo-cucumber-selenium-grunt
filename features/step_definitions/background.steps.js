var assert = require('assert'),
    worldPath = process.cwd() + '/features/support/world';

module.exports = function() {

    this.World = require(worldPath).World;

    this.Given(/^I have an active browser$/, function(callback) {
        this.init(callback);
    });

    this.Given(/^I goto (.*)$/, function(url, callback) {
        this.goto(url, callback);
    });

};
