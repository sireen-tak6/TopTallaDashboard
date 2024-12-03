import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


const ServicesPage = require("../../pages/servicesPage");
const SearchQuery = "ا"
let firstElement="حلاوة الايدي"
Given("the user navigates to the Service page", () => {
    ServicesPage.NavigateToServices()
});

Given("the user is on the Service page", () => {
    ServicesPage.CheckServicesPage()
});

//Verify Service

Then('service elements appears', () => {
    ServicesPage.CheckServicesPageElement()

});

//Excel File
When('the user clicks the "Export As Excel" button', () => {
    ServicesPage.ClickOnSaveAsExcel()
});

Then('Services Excel file downloaded', () => {
    ServicesPage.CheckExcelFileDownloaded()
});

//Search
When("the user writes a valid token in the service search bar", () => {
    ServicesPage.CheckSearchBar()
    ServicesPage.EnterSearchQuery(SearchQuery)
});

Then("all services with names containing the token appear", () => {
    ServicesPage.CheckSearchServicesResult(SearchQuery)
});

Then("all groups with names containing the token appear", () => {
    ServicesPage.CheckSearchGroupsResult(SearchQuery)

});
Then("all packages with names containing the token appear", () => {
    ServicesPage.CheckSearchPackagesResult(SearchQuery)

});

//Rearrange
When("the user clicks the \"Rearrange\" button", () => {
    ServicesPage.ClickRearrangeButton()

});
When("the user rearranges services, packages or groups", () => {
    ServicesPage.RearrangeServices()

});
When("the user clicks the \"Save\" button for saving rearrange", () => {
    ServicesPage.ClickSaveButton()
});
Then("services appear in the new order", () => {
    ServicesPage.CheckRearrangeResult(firstElement)
});

