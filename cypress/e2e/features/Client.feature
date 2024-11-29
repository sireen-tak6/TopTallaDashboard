Feature: Client Module Testing

    Verify user can export Clients list as excel file.
    Verify user can search for a client.
	Verify user can filter the displayed information of Clients.
	Verify user can sorting Clients based 
    Verify user can add a client
    Verify user can edit a client
    Verify user can delete a client

    Background:
        Given I am logged in as a valid user
        And I am on the dashboard
        And I navigate to the Client page
        And I am on the Client page

    Scenario: export clients as excel
        When the user clicks the "Export As Excel" button in clients page
        Then Excel file downloaded

    Scenario: Search for a client
        And the client search bar appears
        And the user writes a valid token in the client search bar
        Then all clients with names containing the token appear

    Scenario: filter client's information
        When the user clicks the "Displayed Columns" button.
        And a list of available columns appears, each with a toggle switch.
        And the user toggles the switches to select columns.
        And the user toggles the switches to deselect columns.
        And the user closes the column selection dialog.
        Then the client information table is displayed with only the selected columns visible.

    Scenario: sorting clients 
        When the user clicks the "Filter and sorting" button.
        And a filter form appears.
        And the user enters filter criteria
        And the user clicks the "Save" button.
        Then the filtered results are displayed, showing only the clients that match the filter.

    Scenario: Add client functionality
        When the user clicks the "Add Client" button
        And the "Add Client" form appears with all fields
        And the user fills all required fields in the client adding form
        And the user clicks the "Save" button
        Then a success message appears
        And the client is added to the clients list

    Scenario: Edit client functionality
        When the user selects a client
        And the client information appears
        And the user clicks the edit button for the client
        And the user fills all required fields in the client editing form
        And the user clicks the "Save" button
        Then a success message appears

    Scenario: Delete client functionality
        When the user selects the client
        And the client information appears
        And the user clicks the delete button for the client
        Then a success message appears