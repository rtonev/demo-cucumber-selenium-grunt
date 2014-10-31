Feature: Being able to search for something on Google
    In order for Google to be useful
    As a User of Google
    I want to be able to search for any query on Google

    Background:
        Given I have an active browser
        And I goto http://google.com/en

    Scenario: Search for nothing on Google
        Given I can see the q element
        And I can see the btnG element
        When I enter  into the q input field
        And click on the btnG button
        Then the page title should be equal to Google
        But the page title should not be equal to  - Google Search

    Scenario Outline: Search for something on Google
        Given I can see the q element
        And I can see the btnG element
        When I enter <query> into the q input field
        And click on the btnG button
        Then the page title should be equal to <query> - Google Search
        But the page title should not be equal to Google
        Examples:
            | query |
            | foo   |
            | bar   |
