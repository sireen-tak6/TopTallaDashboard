Feature: Service Package Type Module Testing

    Verify user can add a package
    Verify user can edit a package
    Verify user can delete a package

    Background:
        Given I am logged in as a valid user
        And I am on the dashboard
        And the user navigates to the Service page
        And the user is on the Service page

    Scenario: Add package functionality
        When the user clicks the "Add" button on the service page
        And the user clicks on the package type
        And the "Add Package" form appears
        And the user fills all package required fields with valid data
        And the user checks the custom package with approval
        And the "Add Group" button appears
        And the user adds a new group with valid data
        And the user adds services to the package
        And the user clicks the "Save" button
        Then a success message appears
        And the new package is added to the packages list

    Scenario: Edit package functionality
        When the user clicks on the packages tab
        And the packages list appears
        And the user selects a package
        And the "Edit Package" form appears
        And the user enters valid data in the "Edit Package" form
        And the user clicks the "Save" button
        Then a success message appears

    Scenario: Delete package functionality
        When the user clicks on the packages tab
        And the packages list appears
        And the user clicks the "Delete" button for a package
        And the user clicks the "Approve" button
        Then a success message appears
        And the package disappears from the packages list