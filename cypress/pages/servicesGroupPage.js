class ServicesGroupPage {
    elements = {
        GroupTitle: () => cy.findByText(/أضف مجموعة جديدة/i),
        NameField: () => cy.findByRole('textbox', { name: /اسم المجموعة/i }),
        EditTitle: () => cy.findByText(/تعديل المجموعة/i),
        ApproveButton: () => cy.findByRole('button', { name: /تأكيد/i }),
    }


    CheckAddGroupForm() {
        this.elements.GroupTitle().should('be.visible')
    }

    EnterGroupName(Name) {
        this.elements.NameField().should('be.visible').clear().type(Name)
    }
    CheckAddedGroup(Name) {
        cy.get('ion-accordion-group')
            .find('ion-accordion')
            .find('ion-item > ion-label > ion-text').contains(Name).should('exist');
    }
    SelectGroupEdit(Query) {
        cy.get('ion-accordion-group')
            .find('ion-accordion')
            .contains(Query).closest('ion-item').find('ion-buttons > span:eq(1) > ion-button').click()
    }
    CheckEditForm() {
        this.elements.EditTitle().should('be.visible')
    }

    SelectGroupDelete(Query) {
        cy.get('ion-accordion-group')
            .find('ion-accordion')
            .contains(Query).closest('ion-item').find('ion-buttons > span:eq(2) > ion-button').click()
    }
    ClickApprove() {
        this.elements.ApproveButton().should('be.visible').click()
    }
    CheckDeleteResult(Name) {
        cy.get('ion-accordion-group')
            .find('ion-accordion')
            .find('ion-item > ion-label > ion-text').contains(Name).should('not.exist');
    }
}

module.exports = new ServicesGroupPage();
