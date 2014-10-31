var assert = require('assert'),
    worldPath = process.cwd() + '/features/support/world';

module.exports = function() {

    this.World = require(worldPath).World;

    this.Given(/^I am at Google's landing page$/, function (callback) {
        this.gotoGoogle(callback);
    });

    this.Given(/^I can see the input field$/, function (callback) {
        this.assertIsElementVisible('q', callback);
    });

    this.Given(/^I can see the button$/, function (callback) {
        this.assertIsElementVisible('btnG', callback);
    });

    this.When(/^I enter a query equal to (.*)$/, function (query, callback) {
        this.elementInput('q', query, callback);
    });

    this.When(/^click on the button$/, function (callback) {
        this.elementClick('btnG', callback);
    });

    this.Then(/^the title should contain (.*)$/, function (query, callback) {
        this.title(function(title) {
            assert.equal(query + ' - Google Search', title);
            callback();
        });
    });

};
