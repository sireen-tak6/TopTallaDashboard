class ClientPage {
    elements = {
        ClientNavigationButton: () => cy.get('ion-button[router-link="/clients"]'),
        ClientTitle: () => cy.findByRole('heading', { name: /قائمة العملاء /i }),
        SaveAsExcel: () => cy.findByText(/حفظ كملف إكسل/i),
        SearchBar: () => cy.findByRole('searchbox', { name: /search text/i }),
        DisplayedColumnsButton: () => cy.get('#columns-visibility'),
        FilterButton: () => cy.contains('ion-label', 'فرز وترتيب البيانات'),
        AvailabelColumnsList: () => cy.get('list'),
        ClientList: () => cy.get('table > tbody'),
        ClientListHeaders: () => cy.get('table > thead > tr > th'),
        AddClientButton: () => cy.findByText(/إضافة عميل/i),
        MaleGender: () => cy.get('._optionsList_1tanm_5 > :nth-child(1)'),
        FemaleGender: () => cy.get('._optionsList_1tanm_5 > .ion-color'),
        Banner: () => cy.get('.title-default'),
        ThreeDotsClient: () => cy.get('#client-actions-popover'),
        EditButton: () => cy.get('ion-item:has(ion-label:contains("تعديل"))'),
        DeleteButton: () => cy.get('ion-item:has(ion-label:contains("حذف"))'),
        FirstClient: () => cy.get('table > tbody > tr:nth-child(1)'),
        MaleGenderFilterItem: () => cy.get('._optionsList_1tanm_5 > :nth-child(1)'),
        FemaleGenderFilterItem: () => cy.get('._optionsList_1tanm_5 > :nth-child(2)'),
        OtherGenderFilterItem: () => cy.get('._optionsList_1tanm_5 > :nth-child(3)'),
        MinReservationInputField: () => cy.get('ion-list:has(h6:contains("الحجوزات")) input[placeholder="الأدنى"]'),
        MaxReservationInputField: () => cy.get('ion-list:has(h6:contains("الحجوزات")) input[placeholder="الأعلى"]'),
        MinRevenuInputField: () => cy.get('ion-list:has(h6:contains("إيرادات")) input[placeholder="الأدنى"]'),
        MaxRevenuInputField: () => cy.get('ion-list:has(h6:contains("إيرادات")) input[placeholder="الأعلى"]'),
        MinDateField: () => cy.get('ion-datetime-button[datetime="MIN"]'),
        MaxDateField: () => cy.get('ion-datetime-button[datetime="MAX"]'),
        SaveDateButton: () => cy.get('ion-datetime#MIN').shadow().find('ion-button.confirm-button')
    }

    ListSwitches = {
        IconColumn: () => cy.get('.list-md > :nth-child(1) > .ion-color'),
        FirstNameColumn: () => cy.get('.list-md > :nth-child(2) > .ion-color'),
        LastNameColumn: () => cy.get('.list-md > :nth-child(3) > .ion-color'),
        GenderColumn: () => cy.get('.list-md > :nth-child(4) > .ion-color'),
        PhoneColumn: () => cy.get('.list-md > :nth-child(5) > .ion-color'),
        EmailColumn: () => cy.get('.list-md > :nth-child(6) > .ion-color'),
        AdsApproveColumn: () => cy.get('.list-md > :nth-child(7) > .ion-color'),
        AppointmentsColumn: () => cy.get('.list-md > :nth-child(8) > .ion-color'),
        RevenuesColumn: () => cy.get('.list-md > :nth-child(9) > .ion-color'),
        LastVisitColumn: () => cy.get('.list-md > :nth-child(10) > .ion-color'),
        NotesColumn: () => cy.get('.list-md > :nth-child(11) > .ion-color'),
        PreviousServices: () => cy.get('.list-md > :nth-child(12) > .ion-color'),
    }

    AddClientForm = {
        FirstNameField: () => cy.findByRole('textbox', { name: /الاسم الأول/i }),
        LastNameField: () => cy.findByRole('textbox', { name: /الاسم الأخير/i }),
        EmailField: () => cy.findByRole('textbox', { name: /البريد الالكتروني/i }),
        PhoneField: () => cy.findByRole('textbox', { name: /رقم الهاتف/i }),
        Gender: () => cy.get('#gender'),
        NoteField: () => cy.findByRole('textbox', { name: /ملاحظة/i }),
        AdsMessagesCheckbox: () => cy.get('#hasAcceptedVenueMarketing'),
        PrePayCheckbox: () => cy.findByText(/مطلوب الدفع مسبقا/i),
        SaveButton: () => cy.get('[slot="end"]').contains('حفظ'),

    }

    FilterForm = {
        FirstNameField: () => cy.get('input[placeholder="الاسم الأول"]'),
        LastNameField: () => cy.get('input[placeholder="الاسم الأخير"]'),
        GenderField: () => cy.get('ion-item#gender'),
        PhoneNumberField: () => cy.get('input[placeholder="رقم الهاتف"]'),
        EmailField: () => cy.get('input[placeholder="البريد الالكتروني"]'),
        AgreeToAdsYesRadio: () => cy.get('ion-radio[value="true"]'),
        AgreeToAdsNoRadio: () => cy.get('ion-radio[value="false"]'),
        ReservationsLessThanRadio: () => cy.get('ion-radio[value="$lte"]').eq(0),
        ReservationsBetweenRadio: () => cy.get('ion-radio[value="$between"]').eq(0),
        ReservationsGreaterThanRadio: () => cy.get('ion-radio[value="$gte"]').eq(0),
        RevenueLessThanRadio: () => cy.get('ion-radio[value="$lte"]').eq(1),
        RevenueBetweenRadio: () => cy.get('ion-radio[value="$between"]').eq(1),
        RevenueGreaterThanRadio: () => cy.get('ion-radio[value="$gte"]').eq(1),
        LastVisitBeforeRadio: () => cy.get('ion-radio[value="$lte"]').eq(2),
        LastVisitBetweenRadio: () => cy.get('ion-radio[value="$between"]').eq(2),
        LastVisitAfterRadio: () => cy.get('ion-radio[value="$gte"]').eq(2),
        NotesField: () => cy.get('input[placeholder="ملاحظات"]'),
        PreviousServicesDropdown: () => cy.get('#react-select-2-input'),

    }

    NavigateToClient() {
        this.elements.ClientNavigationButton().click()
    }

    CheckClientPage() {
        cy.wait(5000)
        cy.url().should('include', 'https://partners.stg.toptalla.com/clients')
        this.elements.ClientTitle().should('be.visible')
    }

    //excel
    ClickOnSaveAsExcel() {
        this.elements.SaveAsExcel().should('be.visible')
        this.elements.SaveAsExcel().click()
    }

    CheckExcelFileDownloaded() {
        const today = new Date().toISOString().slice(0, 10); // Format as YYYY-MM-DD
        const fileName = `${Cypress.config('downloadsFolder')}/العملاء[${today}].xlsx`;
        cy.readFile(fileName)
    }

    //search
    CheckSearchBar() {
        this.elements.SearchBar().should('be.visible')
    }

    EnterSearchQuery(Query) {
        this.elements.SearchBar().type(Query)
        cy.wait(2000)
    }

    CheckSearchResult(Query) {
        this.elements.ClientList().then(($rows) => {
            if ($rows.length !== 0) {
                cy.wrap($rows).each(($row) => {
                    cy.wrap($row).should('contain.text', Query);
                });
            }
        });
    }

    //filter
    ClickDisplayedColumnsButton() {
        this.elements.DisplayedColumnsButton().should('be.visible').click()
    }

    CheckColumnsList() {
        for (const elementName in this.ListSwitches) {
            this.ListSwitches[elementName]().trigger('mouseover')
            this.ListSwitches[elementName]().scrollIntoView().should('be.visible')
            cy.wait(1000)
        }
    }

    CheckColumns(columns) {
        this.ListSwitches.IconColumn().trigger('mouseover')
        columns.forEach((elementName) => {
            if (this.ListSwitches[elementName]) {
                this.ListSwitches[elementName]().scrollIntoView().should('be.visible').then((switchElement) => {
                    cy.wrap(switchElement).invoke('prop', 'checked').then((isChecked) => {
                        if (!isChecked) {
                            cy.wrap(switchElement).click();
                        }
                    });
                });
                cy.wait(1000)

            }
        });
    }

    UnCheckColumns(columns) {
        this.ListSwitches.IconColumn().trigger('mouseover')
        columns.forEach((elementName) => {
            if (this.ListSwitches[elementName]) {
                this.ListSwitches[elementName]().scrollIntoView().should('be.visible').then((switchElement) => {
                    cy.wrap(switchElement).invoke('prop', 'checked').then((isChecked) => {
                        if (isChecked) {
                            cy.wrap(switchElement).click();
                        }
                    });
                });
                cy.wait(1000)

            }
        });
    }

    CloseColumnsList() {
        cy.get('body').type('{esc}');
    }

    CheckColumnsFilterResult(columns) {
        this.elements.ClientListHeaders()
            .should('have.length', columns.length)
            .each((header, index) => {
                cy.wrap(header).should('contain.text', columns[index]);
            });
    }

    //Sort
    ClickFilterButton() {
        this.elements.FilterButton().should('be.visible').click()
    }

    CheckFilterForm() {
        this.elements.Banner().should('contain.text', 'فرز وترتيب البيانات')
        for (const elementName in this.FilterForm) {
            this.FilterForm[elementName]().trigger('mouseover')
            this.FilterForm[elementName]().scrollIntoView().should('be.visible')
            cy.wait(500)
        }
    }

    FillFilterForm({
        FirstName = null,
        LastName = null,
        Phone = null,
        Email = null,
        MinReservation = null,
        MaxReservation = null,
        MinRevenu = null,
        MaxRevenu = null,
        MinDay = null,
        MinMonth = null,
        MinYear = null,
        MaxDay = null,
        MaxMonth = null,
        MaxYear = null,
        Notes = null } = {}
    ) {
        FirstName && this.FilterForm.FirstNameField().scrollIntoView().type(FirstName)
        LastName && this.FilterForm.LastNameField().scrollIntoView().type(LastName)
        this.FilterForm.GenderField().scrollIntoView().click()
        this.elements.MaleGenderFilterItem().scrollIntoView().click()
        Phone && this.FilterForm.PhoneNumberField().scrollIntoView().type(Phone)
        Email && this.FilterForm.EmailField().scrollIntoView().type(Email)
        this.FilterForm.AgreeToAdsYesRadio().scrollIntoView().click()
        this.FilterForm.ReservationsBetweenRadio().scrollIntoView().click()
        MinReservation && this.elements.MinReservationInputField().scrollIntoView().type(MinReservation)
        MaxReservation && this.elements.MaxReservationInputField().scrollIntoView().type(MaxReservation)
        this.FilterForm.RevenueBetweenRadio().scrollIntoView().click()
        MinRevenu && this.elements.MinRevenuInputField().scrollIntoView().type(MinRevenu)
        MaxRevenu && this.elements.MaxRevenuInputField().scrollIntoView().type(MaxRevenu)
        MinDay && MaxDay && this.FilterForm.LastVisitBetweenRadio().scrollIntoView().click()
        MinDay && this.elements.MinDateField().scrollIntoView().click()
        MinDay && cy.get('ion-datetime#MIN').shadow().find(`button.calendar-day[data-day="${MinDay}"][data-month="${MinMonth}"][data-year="${MinYear}"]`).click();
        MinDay && cy.get('ion-datetime#MIN').shadow().find('ion-button#confirm-button').click();
        MaxDay && this.elements.MaxDateField().scrollIntoView().click()
        MaxDay && cy.get('ion-datetime#MAX').shadow().find(`button.calendar-day[data-day="${MaxDay}"][data-month="${MaxMonth}"][data-year="${MaxYear}"]`).click();
        MaxDay && cy.get('ion-datetime#MAX').shadow().find('ion-button#confirm-button').click();
        Notes && this.FilterForm.NotesField().type(Notes);
    }


    CheckSortResult({
        FirstName = null,
        LastName = null,
        Phone = null,
        Email = null,
        MinReservation = null,
        MaxReservation = null,
        MinRevenu = null,
        MaxRevenu = null,
        MinDay = null,
        MinMonth = null,
        MinYear = null,
        MaxDay = null,
        MaxMonth = null,
        MaxYear = null,
        Notes = null,
        Service = null,
        Result,
    } = {}
    ) {
        FirstName && cy.get('ion-chip')
            .contains(`الاسم الأول: ${FirstName}`)
            .should('exist');

        LastName && cy.get('ion-chip')
            .contains(`الاسم الأخير: ${LastName}`)
            .should('exist');

        cy.get('ion-chip')
            .contains('الجنس: رجال')
            .should('exist');

        Email && cy.get('ion-chip')
            .contains(`البريد الالكتروني: ${Email}`)
            .should('exist');

        cy.get('ion-chip')
            .contains(`موافقة على استلام الاعلانات: نعم`)
            .should('exist');

        MinRevenu && MaxRevenu && cy.get('ion-chip')
            .contains(`إيرادات: ${MinRevenu}, ${MaxRevenu}`)
            .should('exist');

        MinReservation && MaxReservation && cy.get('ion-chip')
            .contains(`الحجوزات: ${MinReservation}, ${MaxReservation}`)
            .should('exist');

        Notes && cy.get('ion-chip')
            .contains(`ملاحظات: ${Notes}`)
            .should('exist');

        Service && cy.get('ion-chip')
            .contains(`الخدمات السابقة: ${Service}`)
            .should('exist');

        Phone && cy.get('ion-chip')
            .contains(`رقم الهاتف: ${Phone}`)
            .should('exist');

        MinDay && MaxDay && cy.get('ion-chip')
            .contains(`الزيارة الأخيرة: من ${MinDay}-${MinMonth}-${MinYear} إلى ${MaxDay}-${MaxMonth}-${MaxYear}`)
            .should('exist');

        if (Result) {
            this.elements.ClientList()
                .find('tr').then(($rows) => {
                    cy.wrap($rows)
                        .should('have.length.greaterThan', 0)
                        .each(($row) => {
                            FirstName && cy.wrap($row).find('td').eq(1).should('contain.text', FirstName);

                            LastName && cy.wrap($row).find('td').eq(2).should('contain.text', LastName);

                            cy.wrap($row).find('td').eq(3).should('contain.text', 'male');

                            Email && cy.wrap($row).find('td').eq(5).should('contain.text', Email);

                            cy.wrap($row).find('td').eq(6).find('[color="success"]').should('be.visible');

                            MinReservation && MaxReservation && cy.wrap($row).find('td').eq(7).then(($cell) => {
                                const value = parseFloat($cell.text());
                                expect(value).to.be.within(MinReservation, MaxReservation);
                            });

                            MinRevenu && MaxRevenu && cy.wrap($row).find('td').eq(8).then(($cell) => {
                                const value = parseFloat($cell.text());
                                expect(value).to.be.within(MinRevenu, MaxRevenu);
                            });
                        })
                });
        }
        else {
            this.elements.ClientList().find('tr').should('have.length', 0)
        }

    }

    //Add Client
    ClickAddClientButton() {
        this.elements.AddClientButton().click()
        cy.wait(1000)
    }

    CheckAddClientForm() {
        this.elements.Banner().should('contain.text', 'إضافة عميل')
        for (const elementName in this.AddClientForm) {
            this.AddClientForm[elementName]().trigger('mouseover')
            this.AddClientForm[elementName]().scrollIntoView().should('be.visible')
            cy.wait(500)
        }
    }

    FillClientForm(FirstName = null, LastName = null, Email = null, Notes = null) {
        FirstName && this.AddClientForm.FirstNameField().scrollIntoView().clear().type(FirstName)
        cy.wait(1000)
        LastName && this.AddClientForm.LastNameField().scrollIntoView().clear().type(LastName)
        cy.wait(1000)
        Email && this.AddClientForm.EmailField().scrollIntoView().clear().type(Email)
        cy.wait(1000)
        Notes && this.AddClientForm.NoteField().scrollIntoView().clear().type(Notes)
        cy.wait(1000)
        this.AddClientForm.Gender().scrollIntoView().click()
        cy.wait(1000)
        this.elements.MaleGender().scrollIntoView().click()
        cy.wait(1000)
        this.AddClientForm.AdsMessagesCheckbox().scrollIntoView().click()
        cy.wait(1000)
        this.AddClientForm.PrePayCheckbox().scrollIntoView().click()
        cy.wait(1000)
    }

    ClickSaveButton() {
        cy.wait(1000)
        this.AddClientForm.SaveButton().click({ force: true })
        cy.wait(3000)
    }

    CheckClientAdded(Query) {
        cy.wait(4000)
        this.elements.ClientList().find('tr').should('have.length.greaterThan', 1);
        this.elements.ClientList().find('tr').first().should('contain.text', Query);
    }

    //Edit Client
    SelectFirstClient() {
        this.elements.ClientList().find('tr').then(($rows) => {
            if ($rows.length > 1) {
                cy.wrap($rows[1]).click();
            } else {
                throw new Error('Second row does not exist');
            }
        });
    }

    CheckClientDetails() {
        this.elements.Banner().should('contain.text', 'تفاصيل العميل')
    }

    ClickThreeDots() {
        this.elements.ThreeDotsClient().click()
    }

    ClickEditButton() {
        this.elements.EditButton().click()
    }

    //Delete Client
    ClickDeleteButton() {
        this.elements.DeleteButton().click()
    }

    CheckEditClientForm() {
        this.elements.Banner().should('contain.text', 'تعديل العميل')
        for (const elementName in this.AddClientForm) {
            this.AddClientForm[elementName]().trigger('mouseover')
            this.AddClientForm[elementName]().scrollIntoView().should('be.visible')
            cy.wait(500)
        }
    }
}

module.exports = new ClientPage();
