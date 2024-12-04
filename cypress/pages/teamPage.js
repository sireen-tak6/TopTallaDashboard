class TeamPage {
    elements = {
        TeamNavigationButton: () => cy.get('ion-button[router-link="/team"]'),
        TeamPageTitle: () => cy.findByRole('heading', { name: /فريق العمل/i }),
        ActiveTab: () => cy.get('ion-segment-button[value="active"]'),
        ArchivedTab: () => cy.get('ion-segment-button[value="archived"]'),
        Tabs: () => cy.get('ion-segment'),
        SearchField: () => cy.findByRole('searchbox', { name: /search text/i }),
        TeamList: () => cy.get('ion-segment + ion-content > ion-row:eq(2)'),
        RearrangeButton: () => cy.findByText(/إعادة ترتيب الموظفين/i),
        RearrangeTitle: () => cy.findByRole('banner').findByText(/إعادة ترتيب الموظفين/i),
        SaveRearrangeButton: () => cy.findByText(/حفظ/i),
        TeamCard: () => this.elements.TeamList().find('ion-card'),
        Banner: () => cy.findByRole('banner'),
        ThreeDotsButton: () => cy.get('#employee-actions-popover'),
        PopOver: () => cy.get('ion-popover'),
        ArchiveButton: () => this.elements.PopOver().find('ion-item').contains("أرشفة"),
        ActiveButton: () => this.elements.PopOver().find('ion-item').contains("إلغاء الأرشفة"),
        AddPasswordButton: () => this.elements.PopOver().find('ion-item').contains("إنشاء كلمة سر جديدة لهذا الموظف"),
        YesButton: () => cy.findByRole('button', { name: /نعم/i }),
        AddTeamButton: () => cy.findByText(/إضافة موظف/i),
        AddTabs: () => cy.get('ion-segment').should('have.attr', 'role', 'tablist'),
        BasicInformationTab: () => cy.get('ion-segment-button').contains('معلومات اساسية'),
        WorkingHoursTab: () => cy.get('ion-segment-button').contains('ساعات العمل'),
        ServicesTab: () => cy.get('ion-segment-button').contains('الخدمات'),
        endingDate: () => cy.get('ion-datetime-button[datetime="endingDate"]'),
        NextButton: () => cy.findByText(/التالي/i),
        AddPasswordTitle: () => cy.findByText(/كلمة سر يجب أن تحوي 6 أحرف\/أرقام على الأقل/i),
        PasswordField: () => cy.findByLabelText(/كلمة المرور \*/i),
        NewPasswordAlert: () => cy.findByRole('heading', { name: /كلمة المرور الجديدة/i }),
        CloseNewPassword: () => cy.findByRole('button', { name: /إغلاق/i })
    }
    AddTeamForm = {
        FirstName: () => cy.findByRole('textbox', { name: /الاسم الأول/i }),
        LastName: () => cy.findByRole('textbox', { name: /الاسم الأخير/i }),
        PhoneNumber: () => cy.findByRole('textbox', { name: /رقم الهاتف/i }),
        Email: () => cy.findByRole('textbox', { name: /البريد الالكتروني/i }),
        JobTitle: () => cy.findByRole('textbox', { name: /المسمى الوظيفي/i }),
        ShortCV: () => cy.findByRole('textbox', { name: /السيرة الذاتية القصيرة/i }),
        providingServices: () => cy.get('#isProvidingServices'),
        gender: () => cy.get('#gender'),
        BirthdayDateButton: () => cy.get('ion-datetime-button[datetime="birthdate"]'),
        salaryPaymentPeriod: () => cy.get('#salaryPaymentPeriod'),
        MonthlySalary: () => cy.get('#monthlySalary'),
        commissionPaymentPeriod: () => cy.get('#commissionPaymentPeriod'),
        ProfitPercentage: () => cy.findByRole('spinbutton', { name: /نسبة الربح/i }),
        isProfitBeforeTax: () => cy.get('#isProfitBeforeTax'),
        isProfitBeforeDiscount: () => cy.get('#isProfitBeforeDiscount'),
        employmentType: () => cy.get('#employmentType'),
        isContractLimited: () => cy.get('#isContractLimited'),
        startingDate: () => cy.get('ion-datetime-button[datetime="startingDate"]'),
        isOwner: () => cy.get('#isOwner')

    }
    WorkingHours = {
        AddButton: () => cy.get('#employeeForm').find('ion-button').contains('إضافة'),
        activateToggle: () => cy.get('#employeeForm ion-toggle'),
        deleteHour: () => cy.get('#employeeForm ion-button[fill="clear"]')
    }

    Services = {
        AllServicesButton: () => cy.findByText(/اختر جميع الخدمات/i),
        Checkboxes: () => cy.get('ion-checkbox'),
    }

    NavigateToTeam() {
        this.elements.TeamNavigationButton().click()

    }
    CheckTeamPage() {
        cy.wait(2000)
        cy.url().should('include', 'https://partners.stg.toptalla.com/team')
        this.elements.TeamPageTitle().should('be.visible')
    }
    NavigateToActivePage() {
        cy.wait(2000)
        this.elements.ActiveTab().click()
        cy.wait(2000)
    }
    CheckActivePage() {
        cy.wait(2000)
        this.elements.Tabs().invoke('attr', 'value').should('eq', 'active');
        cy.wait(2000)
    }
    NavigateToArchivedPage() {
        cy.wait(2000)
        this.elements.ArchivedTab().click()
        cy.wait(2000)
    }
    CheckArchivedPage() {
        cy.wait(2000)
        this.elements.Tabs().invoke('attr', 'value').should('eq', 'archived');
        cy.wait(2000)
    }
    CheckSearchField() {
        this.elements.SearchField().should('be.visible')
    }
    EnterSearchQuery(Query) {
        this.elements.SearchField().type(Query)
        cy.wait(2000)
    }
    CheckSearchResult(Query) {
        this.elements.TeamList().then(($content) => {
            if ($content.children().length > 0) {
                cy.wrap($content).find('ion-card-content')
                    .each(($card) => {
                        cy.wrap($card).find('ion-avatar + ion-text')
                            .invoke('text')
                            .then((text) => {
                                expect(text.toLowerCase()).to.include(Query.toLowerCase());
                            });
                    });
            }
        });
    }

    ClickRearrangeButton() {
        this.elements.RearrangeButton().click()
        cy.wait(2000)
        this.elements.RearrangeTitle().should('be.visible')
    }

    RearrangeTeams() {
        cy.get('ion-reorder-group > ion-item:eq(1) ion-reorder')
            .then(($secondElement) => {

                const secondElementBounds = $secondElement[0].getBoundingClientRect();

                // Locate the first element
                cy.get('ion-reorder-group > ion-item:eq(0) ion-reorder')
                    .then(($firstElement) => {
                        const firstElementBounds = $firstElement[0].getBoundingClientRect();

                        // Drag and drop using realMouse events
                        cy.wrap($secondElement)
                            .realMouseDown({ position: 'center' });
                        cy.wait(1000)
                        cy.document().then((doc) => {
                            doc.dispatchEvent(
                                new MouseEvent('mousemove', {
                                    bubbles: true,
                                    clientX: firstElementBounds.x + firstElementBounds.width / 2,
                                    clientY: firstElementBounds.y + firstElementBounds.height / 2,
                                })
                            );
                        });
                        cy.wait(1000)
                        cy.document().then((doc) => {
                            doc.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
                        });
                        cy.wait(1000)
                    });
            });
    }
    ClickSaveRearrangeButton() {
        cy.wait(1000)
        this.elements.SaveRearrangeButton().click({ force: true })
        cy.wait(3000)
    }
    CheckRearrangeResult(FirstElement) {
        this.elements.TeamList().then(($content) => {
            if ($content.children().length > 0) {
                cy.wrap($content).find('ion-card-content:eq(0)').find('ion-avatar + ion-text')
                    .should('contain', FirstElement).screenshot();
            }
        });
    }

    CheckTeamsList(TeamsExists) {
        cy.wait(1000)

        this.elements.TeamList().should('be.visible')
        if (TeamsExists) {
            this.elements.TeamList().find('ion-card').should('be.visible')
        }
    }

    SelectTeam(TeamName) {
        cy.wait(1000)
        this.elements.TeamCard().contains(`${TeamName}`).click()
        cy.wait(1000)
    }
    CheckEditTeamForm() {
        this.elements.Banner().should('contain.text', 'تعديل الموظف')
    }

    ClickThreeDots() {
        cy.wait(1000)
        this.elements.ThreeDotsButton().should('be.visible').click()
        cy.wait(1000)
        this.elements.AddPasswordButton().should('be.visible')
    }

    ClickActiveButton() {
        cy.wait(1000)
        this.elements.ActiveButton().should('be.visible').click()
        cy.wait(1000)
        this.elements.YesButton().should('be.visible')
    }

    ClickArchiveButton() {
        cy.wait(1000)
        this.elements.ArchiveButton().should('be.visible').click()
        cy.wait(1000)
        this.elements.YesButton().should('be.visible')
    }

    ClickAddPasswordButton() {
        cy.wait(1000)
        this.elements.AddPasswordButton().should('be.visible').click()
        cy.wait(1000)
    }

    ClickYesButton() {
        this.elements.YesButton().should('be.visible').click()
    }

    CheckEmployeeDisappears(TeamName) {
        this.elements.TeamList().then(($content) => {
            if ($content.children().length > 0) {
                cy.wrap($content)
                    .find('ion-card-content')
                    .find(`ion-avatar + ion-text:contains(${TeamName})`)
                    .should('not.exist')
            }
        });
    }
    ClickAddTeamButton() {
        cy.wait(1000)
        this.elements.AddTeamButton().click()
        cy.wait(1000)
    }
    CheckAddTeamForm() {
        cy.wait(1000)
        this.elements.Banner().should('contains.text', 'إضافة موظف')
        this.elements.AddTabs().should('be.visible').within(() => {
            this.elements.BasicInformationTab().should('be.visible')
            this.elements.WorkingHoursTab().should('be.visible')
            this.elements.ServicesTab().should('be.visible')
        })
    }
    CheckAddFields() {
        for (const elementName in this.AddTeamForm) {
            this.AddTeamForm[elementName]().trigger('mouseover').scrollIntoView().should('be.visible')
            cy.wait(500)
        }
        this.elements.WorkingHoursTab().parent().click()
        cy.wait(1000)
        for (const elementName in this.WorkingHours) {
            this.WorkingHours[elementName]().should('be.visible')
            cy.wait(500)
        }
        this.elements.ServicesTab().parent().click()
        for (const elementName in this.Services) {
            this.Services[elementName]().should('be.visible')
            cy.wait(500)
        }
    }
    FillAddFormFields({
        FirstName = null,
        LastName = null,
        PhoneNumber = null,
        Email = null,
        JobTitle = null,
        ShortCV = null,
        providingServices = null,
        gender = null,
        BirthdayDay = null,
        BirthdayMonth = null,
        BirthdayYear = null,
        salaryPaymentPeriod = null,
        MonthlySalary = null,
        commissionPaymentPeriod = null,
        ProfitPercentage = null,
        isProfitBeforeTax = null,
        isProfitBeforeDiscount = null,
        employmentType = null,
        isContractLimited = null,
        startingDay = null,
        startingMonth = null,
        startingYear = null,
        endingDay = null,
        endingMonth = null,
        endingYear = null,
        isOwner = null,
    } = {}) {
        this.elements.BasicInformationTab().parent().click()
        const setDate = (button, selector, day, month, year) => {
            button.scrollIntoView().click();
            cy.get(`ion-datetime${selector}`)
                .shadow()
                .find(`button.calendar-day[data-day="${day}"][data-month="${month}"][data-year="${year}"]`)
                .click();
            cy.get(`ion-datetime${selector}`).shadow().find('ion-button#confirm-button').click();
        };
        FirstName && this.AddTeamForm.FirstName().trigger('mouseover').scrollIntoView().type(FirstName);
        LastName && this.AddTeamForm.LastName().trigger('mouseover').scrollIntoView().type(LastName);
        PhoneNumber && this.AddTeamForm.PhoneNumber().trigger('mouseover').scrollIntoView().type(PhoneNumber);
        Email && this.AddTeamForm.Email().trigger('mouseover').scrollIntoView().type(Email);
        BirthdayDay && BirthdayMonth && BirthdayYear && setDate(this.AddTeamForm.BirthdayDateButton(), '#birthdate', BirthdayDay, BirthdayMonth, BirthdayYear);
        gender && this.AddTeamForm.gender().trigger('mouseover').scrollIntoView().click();
        gender && cy.contains('ion-item', gender).click();
        JobTitle && this.AddTeamForm.JobTitle().trigger('mouseover').scrollIntoView().type(JobTitle);
        ShortCV && this.AddTeamForm.ShortCV().trigger('mouseover').scrollIntoView().type(ShortCV);
        salaryPaymentPeriod && this.AddTeamForm.salaryPaymentPeriod().trigger('mouseover').scrollIntoView().click();
        salaryPaymentPeriod && cy.contains('ion-item', salaryPaymentPeriod).click();
        MonthlySalary && this.AddTeamForm.MonthlySalary().trigger('mouseover').scrollIntoView().clear().type(MonthlySalary.toString(), { delay: 50 });
        commissionPaymentPeriod && this.AddTeamForm.commissionPaymentPeriod().trigger('mouseover').scrollIntoView().click();
        commissionPaymentPeriod && cy.contains('ion-item', commissionPaymentPeriod).click();
        ProfitPercentage && this.AddTeamForm.ProfitPercentage().trigger('mouseover').scrollIntoView().type(ProfitPercentage);
        isProfitBeforeTax && this.AddTeamForm.isProfitBeforeTax().trigger('mouseover').scrollIntoView().click();
        isProfitBeforeDiscount && this.AddTeamForm.isProfitBeforeDiscount().trigger('mouseover').scrollIntoView().click();
        employmentType && this.AddTeamForm.employmentType().trigger('mouseover').scrollIntoView().click();
        employmentType && cy.contains('ion-item', employmentType).click();
        isContractLimited && this.AddTeamForm.isContractLimited().trigger('mouseover').scrollIntoView().click();
        startingDay && startingMonth && startingYear && setDate(this.AddTeamForm.startingDate(), '#startingDate', startingDay, startingMonth, startingYear);
        endingDay && endingMonth && endingYear && setDate(this.elements.endingDate(), '#endingDate', endingDay, endingMonth, endingYear);
        isOwner && this.AddTeamForm.isOwner().trigger('mouseover').scrollIntoView().click();
    }
    CheckProvidingServices() {
        this.AddTeamForm.providingServices().trigger('mouseover').scrollIntoView().click();
    }
    ClickNextButton() {
        this.elements.NextButton().click()
    }
    AddWorkingHours() {
        cy.get('._employeesWorkingCon_1cz40_14 > div > ion-row')
            .as('rows')
            .then(($rows) => {
                const initialRowCount = $rows.length;
                this.WorkingHours.AddButton().click();
                cy.get('@rows').should('have.length', initialRowCount + 1);

                cy.get('._employeesWorkingCon_1cz40_14 > div > ion-row').last().within(() => {
                    cy.get('ion-item[id*="dayOfTheWeek"]').click();
                });

                cy.get('ion-modal:not(#EmployeeModal)')
                    .should('be.visible')
                    .within(() => {
                        cy.contains('ion-item', 'الأحد').should('exist').click();
                    });

                /*  cy.get('._employeesWorkingCon_1cz40_14 > div > ion-row').last().within(() => {
                     cy.get('ion-datetime-button[datetime*="startingTime"]').click();
                 });
     
                 cy.get('ion-modal').shadow().find(`#workingHours.${initialRowCount}.startingTime`)
                     .should('have.attr', 'presentation', 'time')
                     .invoke('val', "09:30:00")
                     .trigger('change');
                 cy.contains('button', 'حفظ').click(); */
            });

        /*    cy.get('._employeesWorkingCon_1cz40_14 > div > ion-row')
               .as('rows')
               .then(($rows) => {
                   cy.get('@rows').last().within(() => {
                       cy.get('ion-datetime-button[datetime*="startingTime"]')
                           .should('contain.text', '09:30');
                       cy.get('ion-datetime-button[datetime*="endingTime"]').click();
                   });
               });
       
           cy.get('ion-modal:not(#EmployeeModal)')
               .should('be.visible')
               .within(() => {
                   cy.get(`#workingHours.${$rows.length - 1}.endingTime`)
                       .should('have.attr', 'presentation', 'time')
                       .invoke('val', "15:45:00")
                       .trigger('change');
                   cy.contains('button', 'حفظ').click();
               });
       
           cy.get('._employeesWorkingCon_1cz40_14 > div > ion-row')
               .as('rows')
               .then(($rows) => {
                   cy.get('@rows').last().within(() => {
                       cy.get('ion-datetime-button[datetime*="endingTime"]')
                           .should('contain.text', '15:45');
                   });
               }); */
    }

    ActivateWorkingHour() {
        this.WorkingHours.activateToggle().eq(0).click()
    }
    ChooseServices() {
        this.Services.AllServicesButton().click()
        this.Services.Checkboxes().each(($checkbox) => {
            cy.wrap($checkbox).should('have.class', 'checkbox-checked')
        });
    }
    CheckAddResult(FirstName, LastName) {
        cy.wait(1000)
        const FullName = `${FirstName} ${LastName}`;
        this.elements.TeamCard().contains(FullName).should('exist');
        cy.wait(1000)
    }
    CheckAddPasswordForm() {
        this.elements.AddPasswordTitle().should('be.visible')
       

    }
    EnterPassword(password) {
        this.elements.PasswordField().should('be.visible').type(password)
    }
    SavePassword() {
        this.elements.AddPasswordTitle()
        .closest('ion-modal')
        .within(() => {
            cy.findByText('حفظ').closest('ion-button').click();  // Find and click the 'حفظ' button
        });    }
    CheckPasswordAlert() {
        this.elements.NewPasswordAlert().should('be.visible')
        this.elements.CloseNewPassword().click()
    }
}

module.exports = new TeamPage();
