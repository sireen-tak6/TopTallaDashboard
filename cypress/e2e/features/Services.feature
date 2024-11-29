Feature: Service Module Testing (with groups)

    Verify Service page
    Verify user can Search a service
    Verify user can Rearrange services
    Verify user can export services as excel file

    Background:
        Given I am logged in as a valid user
        And I am on the dashboard
        And the user navigates to the Service page
        And the user is on the Service page

    Scenario: Verify Service page
        Then service elements appears

    Scenario: Search a service
        When the user writes a valid token in the service search bar
        Then all services with names containing the token appear
        And all groups with names containing the token appear
        And all packages with names containing the token appear

    Scenario: Rearrange services
        When the user clicks the "Rearrange" button
        And the user rearranges services, packages or groups
        And the user clicks the "Save" button
        Then services appear in the new order

    Scenario: export as excel
        When the user clicks the "Export As Excel" button
        Then Excel file downloaded
