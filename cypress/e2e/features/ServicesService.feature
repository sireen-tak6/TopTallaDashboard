Feature: Service Service Type Module Testing

    Verify user can add a service
    Verify user can add a base service
    Verify user can edit a service
    Verify user can delete a service

    Background:
        Given I am logged in as a valid user
        And I am on the dashboard
        And the user navigates to the Service page
        And the user is on the Service page

    Scenario: Add service functionality
        When the user clicks the "Add" button on the service page
        And the user clicks on the service type
        And the "Add Service" form appears
        And the user checks all wanted services from the services list
        And the user adds a new price for each service
        And the user fills all service required fields with valid data
        And the user chooses teams that can offer this service
        And the user clicks the "Save" button
        Then a success message appears
        And the new services are added to the services list

    Scenario: Add base service functionality
        When the user clicks the "Add" button on the service page
        And the user clicks on the service type
        And the "Add Service" form appears
        And the user clicks the "Add New Base Service" button
        And the "Add Base Service" form appears
        And the user fills all base service required fields with valid data
        And the user adds a new price for the base service
        And the user clicks the "Save" button
        Then a success message appears
        And the new base service is added to the services list

    Scenario: Edit service functionality
        When the user selects a service
        And the "Edit Service" form appears
        And the user enters valid data in all three tabs of the "Edit Service" form
        And the user clicks the "Save" button
        Then a success message appears

    Scenario: Archive service functionality
        When the user selects a service
        And the "Edit Service" form appears
        And the user clicks the "Archive" button in the "Edit Service" form
        And the user clicks the "Approve" button
        Then a success message appears
        And the service disappears from the services list