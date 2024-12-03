import "cypress-real-events";
class ServicesPage {
    elements = {
        ServicesNavigationButton: () => cy.get('ion-button[router-link="/services-&-offerings"]'),
        ServicesSectionNavigationButton: () => cy.get('a[href="/services-&-offerings/services"]'),
        DiscountSectionNavigationButton: () => cy.get('a[href="/services-&-offerings/discounts"]'),
        VouchersSectionNavigationButton: () => cy.get('a[href="/services-&-offerings/vouchers"]'),
        SmartCouponSectionNavigationButton: () => cy.get('a[href="/services-&-offerings/smart-coupons"]'),
        PromocodeSectionNavigationButton: () => cy.get('a[href="/services-&-offerings/promocode"]'),
        RearrangeTitle: () => cy.findByText(/إعادة ترتيب الخدمات/i),
        SaveRearrangeButton: () => cy.findByText(/حفظ/i)

    }
    pageElement = {
        SearchField: () => cy.findByRole('searchbox', { name: /search text/i }),
        Tabs: () => cy.get('ion-segment[value="services"]'),
        ServiceTab: () => cy.get('ion-segment-button[value="services"]'),
        PackagesTab: () => cy.get('ion-segment-button[value="packages"]'),
        SaveAsExcelButton: () => cy.findByText(/تصدير لجدول اكسل/i),
        ExpandButton: () => cy.findByText(/فتح الكل/i),
        RearrangeButton: () => cy.findByText(/إعادة الترتيب/i),
        AddServiceButton: () => cy.findByText(/إضافة/i),
        servicesGroup: () => cy.get('ion-accordion-group'),
    }

    NavigateToServices() {
        this.elements.ServicesNavigationButton().click()
    }

    CheckServicesPage() {
        cy.wait(2000)
        cy.url().should('include', 'https://partners.stg.toptalla.com/services-&-offerings')
    }

    //elements
    CheckServicesPageElement() {
        this.elements.ServicesSectionNavigationButton().should('be.visible')
        this.elements.VouchersSectionNavigationButton().should('be.visible')
        this.elements.DiscountSectionNavigationButton().should('be.visible')
        this.elements.PromocodeSectionNavigationButton().should('be.visible')
        this.elements.SmartCouponSectionNavigationButton().should('be.visible')
        for (const elementName in this.pageElement) {
            this.pageElement[elementName]().should('be.visible')
        }

    }
    //excel
    ClickOnSaveAsExcel() {
        this.pageElement.SaveAsExcelButton().should('be.visible')
        this.pageElement.SaveAsExcelButton().click()
    }

    CheckExcelFileDownloaded() {
        const today = new Date().toISOString().slice(0, 10);
        const fileName = `${Cypress.config('downloadsFolder')}/الخدمات - ${today}.xlsx`;
        cy.readFile(fileName)
    }

    //search
    CheckSearchBar() {
        this.pageElement.SearchField().should('be.visible')
    }

    EnterSearchQuery(Query) {
        this.pageElement.SearchField().type(Query)
        cy.wait(2000)
    }

    CheckSearchServicesResult(Query) {
        cy.get('ion-accordion-group')
            .find('ion-accordion')
            .each(($accordion) => {
                cy.wrap($accordion)
                    .find('[slot="content"]')
                    .then(($content) => {
                        if ($content.children().length > 0) {
                            cy.wrap($content)
                                .find('ion-card > ion-item ion-label')
                                .each(($label) => {
                                    cy.wrap($label)
                                        .invoke('text')
                                        .then((text) => {
                                            expect(text.toLowerCase()).to.include(Query.toLowerCase());
                                        });
                                });
                        }
                    });
            });
    }

    CheckSearchGroupsResult(Query) {
        cy.get('ion-accordion-group')
            .find('ion-accordion')
            .each(($accordion) => {
                cy.wrap($accordion)
                    .find('ion-item > ion-label > ion-text')
                    .invoke('text')
                    .then((text) => {
                        expect(text.toLowerCase()).to.include(Query.toLowerCase());
                    });
            });
    }

    CheckSearchPackagesResult(Query) {
        this.pageElement.PackagesTab().click()
        cy.wait(2000)
        cy.get('ion-accordion-group')
            .find('ion-accordion')
            .each(($accordion) => {
                cy.wrap($accordion)
                    .find('ion-item > ion-label > ion-text')
                    .invoke('text')
                    .then((text) => {
                        expect(text.toLowerCase()).to.include(Query.toLowerCase());
                    });
            });
    }

    ClickRearrangeButton() {
        this.pageElement.RearrangeButton().click()
        cy.wait(2000)
        this.elements.RearrangeTitle().should('be.visible')
    }

    RearrangeServices() {
        cy.get('ion-reorder-group ion-item:eq(1) ion-reorder')
            .then(($secondElement) => {
                
                const secondElementBounds = $secondElement[0].getBoundingClientRect();

                // Locate the first element
                cy.get('ion-reorder-group ion-item:eq(0) ion-reorder')
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
    CheckRearrangeResult(FirstElement) {
        cy.get('ion-accordion-group')
            .find('ion-accordion:eq(0)').click()
        cy.get('ion-accordion-group')
            .find('ion-accordion:eq(0)').find('[slot="content"]').find('ion-card').first().should('contain', FirstElement).screenshot();

    }
    ClickSaveButton() {
        cy.wait(1000)
        this.elements.SaveRearrangeButton().click({ force: true })
        cy.wait(3000)
    }
}

module.exports = new ServicesPage();
