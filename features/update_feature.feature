Feature: Being able to search for something on Google
    In order for Google to be useful
    As a User of Google
    I want to be able to search for any query on Google

    Background:
        Given I am at Google's landing page

    Scenario Outline: Search for something on Google
        Given I can see the input field
        And I can see the button
        When I enter a query equal to <query> 
        And click on the button
        Then the title should contain <query>
        Examples:
            | query |
            | foo   |
            | bar   |
