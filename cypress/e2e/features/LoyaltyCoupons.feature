Feature: Service Loyalty Coupon Module Testing

    Verify user can add a loyalty coupon
    Verify user can order loyalty coupons
    Verify user can edit a loyalty coupon
    Verify user can activate a loyalty coupon

    Background:
        Given I am logged in as a valid user
        And I am on the dashboard
        And the user navigates to the Service page
        And the user is on the Service page
        And the user navigates to the Loyalty Coupons page
        And the user is on the Loyalty Coupons page

    Scenario: Add loyalty coupon functionality
        When the user clicks the "Add Loyalty Coupon" button
        And the "Add Loyalty Coupon" form appears
        And the user fills all required loyalty coupon settings fields with valid data
        And the user clicks the "Next" button
        And the "Coupon Services" form appears
        And the user selects services to add to the coupon
        And the user clicks the "Save" button
        Then a success message appears
        And the new loyalty coupon is added to the loyalty coupons list

    Scenario: Order loyalty coupons
        When the user clicks on a column header (Services, Category, or Lifespan)
        Then the coupons are sorted based on the clicked column

    Scenario: Edit loyalty coupon functionality
        When the loyalty coupons list appears
        And the user selects a loyalty coupon
        And the "Edit Loyalty Coupon" form appears
        And the user enters valid data in the "Coupon Settings" section of the "Edit Loyalty Coupon" form
        And the user clicks the "Next" button
        And the user selects services to add to the coupon
        And the user deselects services to remove from the coupon
        And the user clicks the "Save" button
        Then a success message appears

    Scenario: Activate loyalty coupon functionality
        When the loyalty coupons list appears
        And the user selects a loyalty coupon
        And the "Edit Loyalty Coupon" form appears
        And the user toggles the "Activate Coupon" switch to the "On" position
        And the user clicks the "Save" button
        Then a success message appears