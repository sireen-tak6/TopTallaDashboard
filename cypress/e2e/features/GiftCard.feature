Feature: Service Gift Card Module Testing

    Verify user can add a Gift Card
    Verify user can filter Gift card's information
    Verify user can sort Gift Cards
    Verify user can search for a Gift Cards
    Verify user can edit a Gift Card
    Verify user can print a Gift Card as pdf
    Verify user can send a Gift Card via WhatsApp

    Background:
        Given I am logged in as a valid user
        And I am on the dashboard
        And the user navigates to the Service page
        And the user is on the Service page
        And the user navigates to the Gift Cards page
        And the user is on the Gift Cards page

    Scenario: Add Gift Card functionality
        When the user clicks the "Fast Procedures" button
        And the user clicks the "Sell Gift Card" button
        And the "Add Gift Card" form appears
        And the user fills all required gift card service fields with valid data
        And the user clicks the "Add" button in the gift card service form
        And the payment form appears in the gift card form
        And the user chooses a payment method
        And the user clicks the "Add" button in the gift card payment form
        And the user clicks the "Complete" button
        Then a success message appears

    Scenario: Filter Gift Cards information
        When the user clicks the "Displayed Columns" button in the gift cards page
        And a list of available columns appears, each with a toggle switch in the gift cards page
        And the user toggles the switches to select columns in the gift cards page
        And the user toggles the switches to deselect columns in the gift cards page
        And the user closes the column selection dialog in the gift cards page
        Then the gift cards information table is displayed with only the selected columns visible

    Scenario: Sort Gift Cards
        When the user clicks the "Filter and Sorting" button in the gift cards page
        And a filter gift cards form appears
        And the user enters filter criteria
        And the user clicks the "Save" button
        Then the filtered results are displayed, showing only the gift cards that match the filter

    Scenario: Search for a Gift Card
        When the Gift Card search bar appears
        And the user writes a valid token in the gift card search bar
        Then all gift cards with codes containing the token appear

    Scenario: Edit Gift Card Dates functionality
        When the gift cards list appears
        And the user clicks the three dots beside a gift card in the list
        And the user clicks the "Edit Start And End Dates"
        And the "Edit Gift Card" form appears
        And the user enters valid dates in the "Edit Gift Card" form
        And the user clicks the "Save" button
        Then a success message appears

    Scenario: Print Gift Card as PDF functionality
        When the gift cards list appears
        And the user clicks the three dots beside a Gift Card in the list
        And the user clicks the "Print Gift Card"
        And the "Print Gift Card" form appears
        And the user enters valid data in the "Print Gift Card" form
        And the user clicks the "Save As PDF" button
        Then a success message appears
        And the PDF is downloaded successfully

    Scenario: Send Gift Card via WhatsApp functionality
        When the gift cards list appears
        And the user clicks the three dots beside a gift card in the list
        And the user clicks the "Print Gift Card"
        And the "Print Gift Card" form appears
        And the user enters a valid phone number in the "Print Gift Card" form
        And the "Send By WhatsApp" button is active
        And the user clicks the "Send By WhatsApp" button
        Then a success message appears
