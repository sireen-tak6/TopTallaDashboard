Feature: Service Discount Module Testing

    Verify user can add a discount
    Verify user can order discounts
    Verify user can edit a discount
    Verify user can activate/deactivate a discount
    Verify user can delete a discount

    Background:
        Given I am logged in as a valid user
        And I am on the dashboard
        And the user navigates to the Service page
        And the user is on the Service page
        And the user navigates to the Discounts page
        And the user is on the Discounts page

    Scenario: Add discount functionality
        When the user clicks the "Add Discount" button
        And the "Add Discount" form appears
        And the user fills all required discount fields with valid data
        And the user selects all discount times
        And the user clicks the "Next" button
        And the user enters a valid discount percentage
        And the user clicks the "Next" button
        And the user selects services to add to the discount
        And the user clicks the "Save" button
        Then a success message appears
        And the new discount is added to the discounts list

    Scenario: Order discounts
        When the user clicks on a column header (Start Date, End Date, or Discount Percentage)
        Then the discounts are sorted based on the clicked column

    Scenario: Edit discount functionality
        When the discounts list appears
        And the user selects a discount
        And the "Edit Discount" form appears
        And the user enters valid data in the "Discount Settings" section of the "Edit Discount" form
        And the user clicks the "Next" button
        And the user enters a valid discount percentage
        And the user clicks the "Next" button
        And the user selects services to add to the discount
        And the user clicks the "Save" button
        Then a success message appears

    Scenario: Activate/Deactivate discount functionality
        When the discounts list appears
        And the user toggles the switches to activate or deactivate a discount
        Then a success message appears

    Scenario: Delete discount functionality
        When the discounts list appears
        And the user selects a discount
        And the "Edit Discount" form appears
        And the user clicks the three dots in the "Edit Discount" form
        And the user clicks the "Delete" button
        And the user clicks the "Yes" button
        Then a success message appears
        And the discount disappears from the discounts list