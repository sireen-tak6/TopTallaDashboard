import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
const ServicesGroupPage = require("../../pages/servicesGroupPage");
const ServicesPage = require("../../pages/servicesPage");

const GroupName = "Group1"
const EditedGroupName = "Group1e"

When('the user clicks the "Add" button on the service page', () => {
    ServicesPage.ClickAddButton()
});

When('the user clicks on the group type', () => {
    ServicesPage.ClickGroupButton()
});

When('the "Add Group" form appears', () => {
    ServicesGroupPage.CheckAddGroupForm()
});

When('the user enters a valid group name', () => {
    ServicesGroupPage.EnterGroupName(GroupName)
});




Then('the new group is added to the services list', () => {
    ServicesGroupPage.CheckAddedGroup(GroupName)
});

When('the groups and services list appears', () => {
    ServicesPage.CheckServicesList()
});

When('the user clicks the "Edit" button for a specific group', () => {
    ServicesGroupPage.SelectGroupEdit(GroupName)
});

When('the "Edit Group" form appears', () => {
    ServicesGroupPage.CheckEditForm()
});

When('the user enters a new valid group name', () => {
    ServicesGroupPage.EnterGroupName(EditedGroupName)
});


When('the user clicks the "Delete" button for an empty group', () => {
    ServicesGroupPage.SelectGroupDelete(EditedGroupName)
});

When('the user clicks the "Approve" button', () => {
    ServicesGroupPage.ClickApprove()
});

Then('the group disappears from the groups list', () => {
    ServicesGroupPage.CheckDeleteResult(EditedGroupName)
});
