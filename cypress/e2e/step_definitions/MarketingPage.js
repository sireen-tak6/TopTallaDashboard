import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


const MarketingPage = require("../../pages/marketingPage");


Given("I navigate to the Marketing page", () => {
    MarketingPage.NavigateToMarketing()
});

Given("I am on the Marketing page", () => {
    MarketingPage.CheckMarketingPage()
});

//Automated Messaging
When('the Automated messaging page appears', () => {
    MarketingPage.CheckAutomatedMessagingPage()
});

Then('all automated messaging sections work correctly', () => {
    MarketingPage.CheckAutomatedMessagingMarketingSection()
    MarketingPage.CheckAutomatedMessagingTransactionalSection()
});


//Social Media
When('the user navigates to the social media section', () => {
    MarketingPage.ClickSocialMediaButton()
});

When('the user is on the social media section', () => {
    MarketingPage.CheckSocialMediaPage()
});

Then('all social media elements appear', () => {
    MarketingPage.CheckSocialMediaElements()
});

When('the user can copy all links', () => {
    MarketingPage.CheckCopyFunctionality()

});

//Website
When('the user navigates to the website section', () => {
    MarketingPage.ClickWebsiteButton()
});

When('the user is on the website section', () => {
    MarketingPage.CheckWebsitePage()
});

When('all website section elements appear', () => {
    MarketingPage.CheckWebsiteElements()
});
When('the user can click on the "Toggle Website" button', () => {
    MarketingPage.ClickWebsiteToggleButton()
});

When('the user can choose a template', () => {
    MarketingPage.ChooseTemplate()
});

When('the user can copy the website url', () => {
    MarketingPage.CopyUrl()
});
