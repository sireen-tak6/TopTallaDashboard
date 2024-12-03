class MarketingPage {
    elements = {
        MarketingNavigationButton: () => cy.get('ion-button[router-link="/marketing"]'),
        AutomatedMessagingNavigationButton: () => cy.get('a[href="/marketing/automated-messaging"]'),
        SocialMediaNavigationButton: () => cy.get('a[href="/marketing/facebook-instagram"]'),
        WebsiteNavigationButton: () => cy.get('a[href="/marketing/partner-site"]'),
        MarketingTabButton: () => cy.get('ion-tab-button[tab="/marketing"]'),
        TransactionalTabButton: () => cy.get('ion-tab-button[tab="/transactional"]'),
        HeaderTextContainer: () => cy.get('._card_bnqqh_10'),
        SocialMediaTitle: () => cy.get('.ion-no-padding'),
        SocialMediaSubTitle: () => cy.get('._socialTitle_bnqqh_58'),
        CopyButton: () => cy.get('ion-button').contains('نسخ'),
        WebsiteToggle: () => cy.get('#isEnabled'),
        UrlElement: () => cy.get('ion-text').contains("عنوان الموقع الالكتروني"),
        TemplateElement: () => cy.get('ion-text').contains("القالب"),
        ColorElement: () => cy.get('ion-text').contains("الألوان"),
        SocialMediaElement: () => cy.get('ion-text').contains("وسائل التواصل الاجتماعي"),
        ColorPicker: () => cy.get('#primaryColor'),
        TemplateModernElement: () => cy.get('ion-card[button="true"]').contains('Modern'),
        SelectedTemplate: () => cy.get('ion-card[button="true"]._selected_jb04q_9'),
        UrlFields: () => cy.contains("أدخل العنوان الخاص بك هنا. إذا كنت تريد عنوان مخصص بدلاً من ذلك، فيرجى التواصل معنا للحصول على المساعدة!").parent().next(),


    }
    platforms = [
        { title: 'Instagram', url: 'https://booking.toptalla.com/@uat/in/' },
        { title: 'Facebook', url: 'https://booking.toptalla.com/@uat/fb/' },
        { title: 'TikTok', url: 'https://booking.toptalla.com/@uat/tt/' },
        { title: 'Twitter', url: 'https://booking.toptalla.com/@uat/tw/' },
        { title: 'YouTube', url: 'https://booking.toptalla.com/@uat/yt/' },
        { title: 'Snapchat', url: 'https://booking.toptalla.com/@uat/sc/' },
        { title: 'LinkedIn', url: 'https://booking.toptalla.com/@uat/li/' },
        { title: 'WhatsApp', url: 'https://booking.toptalla.com/@uat/wa/' },
        { title: 'Pinterest', url: 'https://booking.toptalla.com/@uat/pi/' },
        { title: 'Reddit', url: 'https://booking.toptalla.com/@uat/re/' },
        { title: 'Tumblr', url: 'https://booking.toptalla.com/@uat/tu/' },
        { title: 'Threads', url: 'https://booking.toptalla.com/@uat/th/' },
        { title: 'Google Maps', url: 'https://booking.toptalla.com/@uat/gm/' },
    ];
    NavigateToMarketing() {
        this.elements.MarketingNavigationButton().click()
    }

    CheckMarketingPage() {
        cy.wait(2000)
        cy.url().should('include', 'https://partners.stg.toptalla.com/marketing')
    }

    CheckAutomatedMessagingPage() {
        this.elements.AutomatedMessagingNavigationButton().click()
        cy.wait(2000)
        cy.url().should('include', 'https://partners.stg.toptalla.com/marketing/automated-messaging')
    }
    ClickSocialMediaButton() {
        this.elements.SocialMediaNavigationButton().click()
    }
    CheckSocialMediaPage() {
        cy.wait(2000)
        cy.url().should('include', 'https://partners.stg.toptalla.com/marketing/facebook-instagram')
    }
    ClickWebsiteButton() {
        this.elements.WebsiteNavigationButton().click()
        cy.wait(2000)
    }
    CheckWebsitePage() {
        cy.wait(2000)
        cy.url().should('include', 'https://partners.stg.toptalla.com/marketing/partner-site')
    }

    CheckAutomatedMessagingMarketingSection() {
        this.elements.MarketingTabButton().click()
        cy.wait(2000)
        cy.url().should('include', 'https://partners.stg.toptalla.com/marketing/automated-messaging/marketing')
        cy.wait(2000)
        this.elements.HeaderTextContainer().should('be.visible')
    }

    CheckAutomatedMessagingTransactionalSection() {
        this.elements.TransactionalTabButton().click()
        cy.wait(2000)
        cy.url().should('include', 'https://partners.stg.toptalla.com/marketing/automated-messaging/transactional')
        cy.wait(2000)
        this.elements.HeaderTextContainer().should('be.visible')

    }

    CheckSocialMediaElements() {
        this.elements.HeaderTextContainer().should('be.visible')
        this.elements.SocialMediaTitle().should('be.visible')
        this.elements.SocialMediaSubTitle().should('be.visible')
        this.platforms.forEach((platform) => {
            cy.get('ion-card')
                .contains(platform.title)
                .trigger('mouseover')
                .scrollIntoView()
                .closest('ion-card')
                .should('exist')
                .within(() => {
                    cy.get('ion-text')
                        .contains(platform.url)
                        .should('exist').screenshot(platform.title);
                    this.elements.CopyButton().should('exist');
                    cy.wait(1000)
                });
        });
    }

    CheckCopyFunctionality() {
        cy.window().then((win) => {
            if (!win.navigator.clipboard) {
                win.navigator.clipboard = {
                    writeText: () => { }
                };
            }
            cy.stub(win.navigator.clipboard, "writeText").resolves().as('clipboardWrite');
        });
        this.platforms.forEach((platform) => {
            cy.get('ion-card')
                .contains(platform.title)
                .trigger('mouseover')
                .scrollIntoView()
                .closest('ion-card')
                .should('exist')
                .within(() => {
                    cy.get('@clipboardWrite').invoke('resetHistory');
                    this.elements.CopyButton().click();
                    cy.get('@clipboardWrite').should(
                        'have.been.calledOnceWith',
                        platform.url,
                    )
                    cy.wait(1000)
                });
        });
    }

    CheckWebsiteElements() {
        this.elements.SocialMediaElement().should('exist')
        this.elements.WebsiteToggle().trigger('mouseover').scrollIntoView().should('exist')
        cy.wait(1000)
        this.elements.TemplateElement().trigger('mouseover').scrollIntoView().should('be.visible')
        cy.wait(1000)
        this.elements.ColorPicker().trigger('mouseover').scrollIntoView().should('be.visible')
        cy.wait(1000)
        this.elements.ColorElement().should('be.visible')
        cy.wait(1000)
        this.elements.UrlElement().trigger('mouseover').scrollIntoView().should('be.visible')
        cy.wait(1000)
        this.elements.UrlFields()
            .should('exist')
            .then((ionRow) => {
                cy.wrap(ionRow).trigger('mouseover').scrollIntoView().find('#subdomain').should('be.visible')
                cy.wait(1000)
                cy.wrap(ionRow).trigger('mouseover').scrollIntoView().find('span[slot="end"]').should('be.visible')
                cy.wait(1000)
                cy.wrap(ionRow).trigger('mouseover').scrollIntoView().find('ion-button').not('[href]').should('be.visible');
            });
        cy.wait(1000)
    }
    ClickWebsiteToggleButton() {
        this.elements.WebsiteToggle().should('have.attr', 'value')
            .then((initialState) => {
                const expectedState = initialState === 'true' ? 'false' : 'true';
                this.elements.WebsiteToggle().click().should('have.attr', 'value', expectedState);
            });
    }
    ChooseTemplate() {
        this.elements.TemplateModernElement().trigger('mouseover').scrollIntoView().click()
        cy.wait(1000)
        this.elements.SelectedTemplate()
            .contains('Modern')
            .should('exist');
    }

    CopyUrl() {
        cy.window().then((win) => {
            if (!win.navigator.clipboard) {
                win.navigator.clipboard = {
                    writeText: () => { }
                };
            }
            cy.stub(win.navigator.clipboard, "writeText").resolves().as('clipboardWrite');
        });
        this.elements.UrlFields()
            .should('exist')
            .then((ionRow) => {
                cy.wrap(ionRow).trigger('mouseover').scrollIntoView().then(() => {
                    cy.wrap(ionRow).find('#subdomain').invoke('val').then((subdomainText) => {
                        cy.wrap(ionRow).find('span[slot="end"]').invoke('text').then((domainText) => {
                            const fullUrl = `https://${subdomainText}.${domainText}`;
                            cy.get('@clipboardWrite').invoke('resetHistory');
                            cy.wrap(ionRow).find('ion-button').not('[href]').click();
                            cy.get('@clipboardWrite').should('have.been.calledOnceWith', fullUrl);
                        });
                    });
                })
            });
    }

}

module.exports = new MarketingPage();
