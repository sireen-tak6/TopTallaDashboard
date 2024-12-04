import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

const TeamPage = require("../../pages/teamPage");
const Query = "e"
let FirstTeam = "محمد الباشا"
const CardName = "Sireen Altakriti"
const TeamInformation = {
    FirstName: "John2",
    LastName: "Doe2",
    Email: "john.doea@example.com",
    JobTitle: "Software Engineer",
    ShortCV: "Experienced software developer with 5+ years in web development.",
    providingServices: true,
    gender: "رجال", // Arabic text for "Men"
    BirthdayDay: 4,
    BirthdayMonth: 12, // July
    BirthdayYear: 2012,
    salaryPaymentPeriod: "نصف شهري",
    MonthlySalary: "5000",
    commissionPaymentPeriod: "شهريا",
    ProfitPercentage: "10",
    isProfitBeforeTax: true,
    isProfitBeforeDiscount: false,
    employmentType: "حسابهم الخاص",
    isContractLimited: true,
    startingDay: 1,
    startingMonth: 12, // January
    startingYear: 2024,
    endingDay: 30,
    endingMonth: 12, // December
    endingYear: 2024,
    isOwner: true,
};

Given('I navigate to the Team page', () => {
    TeamPage.NavigateToTeam()
});

Given('I am on the Team page', () => {
    TeamPage.CheckTeamPage()

});
//Search Active
When('the user navigates to the active employees page', () => {
    TeamPage.NavigateToActivePage()

});
When('the user is on the active employees page', () => {
    TeamPage.CheckActivePage()
});

When('the team search bar appears', () => {
    TeamPage.CheckSearchField()
});

When('the user writes a valid token in the team search bar', () => {
    TeamPage.EnterSearchQuery(Query)
});

Then('all active clients with names containing the token appear', () => {
    TeamPage.CheckSearchResult(Query)
});

//Search Archived
When('the user navigates to the archived employees page', () => {
    TeamPage.NavigateToArchivedPage()
});
When('the user is on the archived employees page', () => {
    TeamPage.CheckArchivedPage()
});
Then('all archived clients with names containing the token appear', () => {
    TeamPage.CheckSearchResult(Query)
});

//Rearrange
When('the user clicks the "Employees Rearrange" button', () => {
    TeamPage.ClickRearrangeButton()
});

When('the user rearranges employees', () => {
    TeamPage.RearrangeTeams()
});

When('the user clicks the "Save" button for rearrange team', () => {
    TeamPage.ClickSaveRearrangeButton()
});

Then('employees appear in the new order', () => {
    TeamPage.CheckRearrangeResult(FirstTeam)
});


//Add Team
When('the user clicks the "Add Employee" button', () => {
    TeamPage.ClickAddTeamButton()
});

When('the "Add Employee" form with three tabs appears', () => {
    TeamPage.CheckAddTeamForm()
});

When('the user fills all basic required fields', () => {
    TeamPage.FillAddFormFields(TeamInformation)
});

When('the user checks "Providing Services"', () => {
    TeamPage.CheckProvidingServices()
});

When('the user clicks the "Next" button on the "Add Employee" form', () => {
    TeamPage.ClickNextButton()
});

When('the user adds working hours', () => {
    TeamPage.AddWorkingHours()
});

When('the user activates some working hours', () => {
    TeamPage.ActivateWorkingHour()
});

When('the user chooses services to add to the employee', () => {
    TeamPage.ChooseServices()
});



Then('the new employee appears in the list', () => {
    TeamPage.CheckAddResult(TeamInformation.FirstName, TeamInformation.LastName)
});

When('the employees list appears', () => {
    TeamPage.CheckActivePage()
    TeamPage.CheckTeamsList(true)
});

When('the user selects an employee', () => {
    TeamPage.SelectTeam(CardName)

});

When('the user edit form appears', () => {
    TeamPage.CheckEditTeamForm()
});

When('the user clicks the three dots in the employee form', () => {
    TeamPage.ClickThreeDots()
});

When('the user clicks the "Add Password" button', () => {
    TeamPage.ClickAddPasswordButton()
});

When('the user enters the new password', () => {
    TeamPage.CheckAddPasswordForm()
    TeamPage.EnterPassword('123456789')
});

When('the user saves the password', () => {
    TeamPage.SavePassword()
});

Then('a new password alert appears', () => {
    TeamPage.CheckPasswordAlert()
});

//Active
When('the user clicks the "Archive" button', () => {
    TeamPage.ClickArchiveButton()
});

When('the user clicks the "Yes" button', () => {
    TeamPage.ClickYesButton()
});

Then('the employee disappears from the employees list', () => {
    TeamPage.CheckEmployeeDisappears(CardName)
});

//Archived
When('the archived employees list appears', () => {
    TeamPage.CheckTeamsList(true)
});

When('the user clicks the "Unarchive" button', () => {
    TeamPage.ClickActiveButton()
});