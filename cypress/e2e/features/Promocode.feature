Feature: Service Promocode Module Testing

    Verify user can add a promocode
    Verify user can edit a promocode
    Verify user can activate a promocode

    Background:
        Given I am logged in as a valid user
        And I am on the dashboard
        And the user navigates to the Service page
        And the user is on the Service page
        And the user navigates to the Promocode page
        And the user is on the Promocode page

    Scenario: Add promocode functionality
        When the user clicks the "Add Promocode" button
        And the "Add Promocode" form appears
        And the user fills all required promocode settings fields with valid data
        And the user clicks the "Next" button
        And the "Promocode Services" form appears
        And the user selects services to add to the promocode
        And the user clicks the "Save" button
        Then a success message appears
        And the new promocode is added to the promocodes list


    Scenario: Edit promocode functionality
        When the promocodes list appears
        And the user selects a promocode
        And the "Edit Promocode" form appears
        And the user enters valid data in the "Promocode Settings" section of the "Edit Promocode" form
        And the user clicks the "Next" button
        And the user selects services to add to the promocode
        And the user deselects services to remove from the promocode
        And the user clicks the "Save" button
        Then a success message appears

    Scenario: Activate promocode functionality
        When the promocodes list appears
        And the user selects a promocode
        And the "Edit Promocode" form appears
        And the user toggles the "Activate Promocode" switch to the "On" position
        And the user clicks the "Save" button
        Then a success message appears