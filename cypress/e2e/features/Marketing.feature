Feature: check marketing module

    Verify marketing sections
    Check social media page elements
    Check website page elements

    Background:
        Given I am logged in as a valid user
        And I am on the dashboard
        And I navigate to the Marketing page
        And I am on the Marketing page

    Scenario: Website section elements
        When the user navigates to the website section
        And the user is on the website section
        And all website section elements appear
        And the user can click on the "Toggle Website" button
        And the user can choose a template
        And the user can copy the website url 
        And the user clicks the "Save" button
        Then a success message appears