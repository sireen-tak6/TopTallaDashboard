Feature: Service Group Type Module Testing

    Verify user can add a group
    Verify user can edit a group
    Verify user can delete a group

    Background:
        Given I am logged in as a valid user
        And I am on the dashboard
        And the user navigates to the Service page
        And the user is on the Service page
        
    Scenario: Add group functionality
        When the user clicks the "Add" button on the service page
        And the user clicks on the group type
        And the "Add Group" form appears
        And the user enters a valid group name
        And the user clicks the "Save" button
        Then a success message appears
        And the new group is added to the services list

    Scenario: Edit group functionality
        When the groups and services list appears
        And the user clicks the "Edit" button for a specific group
        And the "Edit Group" form appears
        And the user enters a valid group name
        And the user clicks the "Save" button
        Then a success message appears

    Scenario: Delete group functionality
        When the groups and services list appears
        And the user clicks the "Delete" button for an empty group
        And the user clicks the "Approve" button
        Then a success message appears
        And the group disappears from the groups list