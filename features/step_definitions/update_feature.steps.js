var assert = require('assert'),
    worldPath = process.cwd() + '/features/support/world';

module.exports = function() {

    this.World = require(worldPath).World;

    this.Given(/^I can see the (.*) element$/, function (elemName, callback) {
        this.assertIsElementVisible(elemName, callback);
    });

    this.When(/^I enter (.*) into the (.*) input field$/,
        function (query, elemName, callback) {
            this.elementInput(elemName, query, callback);
        }
    );

    this.When(/^click on the (.*) button$/, function (elemName, callback) {
        this.elementClick(elemName, callback);
    });

    this.Then(/^the page title should be equal to (.*)$/,
        function (title, callback) {
            this.title(function(t) {
                assert.equal(t, title);
                callback();
            });
        }
    );

    this.Then(/^the page title should not be equal to (.*)$/,
        function (title, callback) {
            this.title(function(t) {
                assert.notEqual(t, title);
                callback();
            });
        }
    );

};
