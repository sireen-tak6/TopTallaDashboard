import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


const ClientPage = require("../../pages/clientPage");
const ClientFirstName = "Sireen9"
const ClientLastName = "Altakriti9"
const ClientEmail = "i9@e.c"
const ClientNote = "test9 test test test"
const ClientFirstNameEdit = "Sireen9e"
const ClientLastNameEdit = "Altakriti9e"
const ClientEmailEdit = "i9e@e.c"
const ClientNoteEdit = "test9e test test test"
const SearchQuery = "n"

Given("I navigate to the Client page", () => {
    ClientPage.NavigateToClient()
});

Given("I am on the Client page", () => {
    ClientPage.CheckClientPage()
});

//Excel File
When('the user clicks the "Export As Excel" button in clients page', () => {
    ClientPage.ClickOnSaveAsExcel()
});

Then('Excel file downloaded', () => {
    ClientPage.CheckExcelFileDownloaded()
});

//Search
When("the client search bar appears", () => {
    ClientPage.CheckSearchBar()
});

When("the user writes a valid token in the client search bar", () => {
    ClientPage.EnterSearchQuery(SearchQuery)
});

Then("all clients with names containing the token appear", () => {
    ClientPage.CheckSearchResult(SearchQuery)
});

//Filter
When("the user clicks the \"Displayed Columns\" button", () => {
    ClientPage.ClickDisplayedColumnsButton()
});

When("a list of available columns appears, each with a toggle switch", () => {
    ClientPage.CheckColumnsList()
});

When("the user toggles the switches to select columns", () => {
    ClientPage.CheckColumns(['FirstNameColumn', 'LastNameColumn'])
});

When("the user toggles the switches to deselect columns", () => {
    ClientPage.UnCheckColumns(['IconColumn', 'GenderColumn', 'PhoneColumn', 'EmailColumn', 'AdsApproveColumn', 'AppointmentsColumn', 'RevenuesColumn', 'LastVisitColumn', 'NotesColumn', 'PreviousServices'])
});

When("the user closes the column selection dialog", () => {
    ClientPage.CloseColumnsList()
});

Then("the client information table is displayed with only the selected columns visible", () => {
    ClientPage.CheckColumnsFilterResult(['الاسم الأول', 'الاسم الأخير'])
});

//Sort
When("the user clicks the \"Filter and sorting\" button", () => {
    ClientPage.ClickFilterButton()
});

When("a filter form appears", () => {
    ClientPage.CheckFilterForm()
});

When("the user enters filter criteria", () => {
    ClientPage.FillFilterForm({
        FirstName: ClientFirstName,
        LastName: ClientLastName,
        Email: ClientEmail,
        MinReservation: 0,
        MaxReservation: 100,
        MinRevenu: 0,
        MaxRevenu: 100,
        MinDay: 1,
        MinMonth: 12,
        MinYear: 2024,
        MaxDay: 9,
        MaxMonth: 12,
        MaxYear: 2024,
        Notes: ClientNote
    })
});

Then("the filtered results are displayed, showing only the clients that match the filter", () => {
    ClientPage.CheckSortResult({
        FirstName: ClientFirstName,
        LastName: ClientLastName,
        Email: ClientEmail,
        MinReservation: 0,
        MaxReservation: 100,
        MinRevenu: 0,
        MaxRevenu: 100,
        MinDay: "01",
        MinMonth: 12,
        MinYear: 2024,
        MaxDay: "09",
        MaxMonth: 12,
        MaxYear: 2024,
        Notes: ClientNote,
        Result:false
    })
});

//Add Client
When("the user clicks the \"Add Client\" button", () => {
    ClientPage.ClickAddClientButton()
});

When("the \"Add Client\" form appears with all fields", () => {
    ClientPage.CheckAddClientForm()
});
When("the user fills all required fields in the client adding form", () => {
    ClientPage.FillClientForm(ClientFirstName, ClientLastName, ClientEmail, ClientNote)
});
When("the user clicks the \"Save\" button", () => {
    ClientPage.ClickSaveButton()
});
Then("the client is added to the clients list", () => {
    ClientPage.CheckClientAdded(ClientEmail)
});

//Edit Client
When("the user selects the client", () => {
    ClientPage.SelectFirstClient()
});
When("the client information appears", () => {
    ClientPage.CheckClientDetails()
});
When("the user clicks the edit button for the client", () => {
    ClientPage.ClickThreeDots()
    ClientPage.ClickEditButton()
});
When("the \"Edit Client\" form appears with all fields", () => {
    ClientPage.CheckEditClientForm()
});
When("the user fills all required fields in the client editing form", () => {
    ClientPage.FillClientForm(ClientFirstNameEdit, ClientLastNameEdit, ClientEmailEdit, ClientNoteEdit)
});

//Delete Client
When("the user clicks the delete button for the client", () => {
    ClientPage.ClickThreeDots()
    ClientPage.ClickDeleteButton()
});
