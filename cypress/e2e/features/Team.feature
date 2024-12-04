Feature: Team Module Testing

    Verify Search an active employee
    Verify Search an arctived employee
    Verify Rearrange employees
    Verify user can add an employee
    Verify user can edit an existing client
    Verify archiving an existing employee
    Verify activating an existing employee

    Background:
        Given I am logged in as a valid user
        And I am on the dashboard
        And I navigate to the Team page
        And I am on the Team page

    Scenario: Search an active employee
        When the user navigates to the active employees page
        And the user is on the active employees page
        And the team search bar appears
        And the user writes a valid token in the team search bar
        Then all active clients with names containing the token appear

    Scenario: Search an archived employee
        When the user navigates to the archived employees page
        And the user is on the archived employees page
        And the team search bar appears
        And the user writes a valid token in the team search bar
        Then all archived clients with names containing the token appear

    Scenario: Rearrange employees
        When the user clicks the "Employees Rearrange" button
        And the user rearranges employees
        And the user clicks the "Save" button for rearrange team
        Then employees appear in the new order

    Scenario: add an employee
        When the user clicks the "Add Employee" button
        And the "Add Employee" form with three tabs appears
        And the user fills all basic required fields 
        And the user checks "Providing Services"
        And the user clicks the "Next" button on the "Add Employee" form
        And the user adds working hours
        And the user activates some working hours
        And the user clicks the "Next" button on the "Add Employee" form
        And the user chooses services to add to the employee
        And the user clicks the "Save" button
        Then a success message appears
        And the new employee appears in the list

    Scenario: edit an existing employee
        When the employees list appears
        And the user selects an employee
        And the user edit form appears
        And the user clicks the three dots in the employee form
        And the user clicks the "Add Password" button
        And the user enters the new password
        And the user saves the password
        And a success message appears
        And a new password alert appears
        And the user clicks the "Save" button
        Then a success message appears

    Scenario: archive an employee
        When the employees list appears
        And the user selects an employee
        And the user edit form appears
        And the user clicks the three dots in the employee form
        And the user clicks the "Archive" button
        And the user clicks the "Yes" button 
        Then a success message appears
        And the employee disappears from the employees list

    Scenario: activate an employee
        When the user navigates to the archived employees page
        And the archived employees list appears
        And the user selects an employee
        And the user edit form appears
        And the user clicks the three dots in the employee form
        And the user clicks the "Unarchive" button
        And the user clicks the "Yes" button
        Then a success message appears
        And the employee disappears from the employees list
