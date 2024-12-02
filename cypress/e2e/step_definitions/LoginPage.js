import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


const LoginPage = require("../../pages/loginPage");

Given("I am logged in as a valid user", () => {
    LoginPage.NavigateToToptallaUAT("uat@toptalla.com","123qwe")
});

Given("I am on the dashboard", () => {
    LoginPage.CheckBoardPage()
});

Then("a success message appears", () => {
    LoginPage.CheckSuccessMessage()
});
