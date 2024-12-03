class LoginPage{
    elements = {
        NavbarLoginButton: () => cy.get('.elementor-element-5ef1cc0a > .elementor-widget-container > .elementor-button-wrapper > .elementor-button'),

        LoginLabel: () => cy.get('#signInForm > ion-text:nth-child(2) > p'),

        EmailField: () => cy.get('#identifier'),

        PasswordField: () => cy.get('#password'),

        LoginButton: () => cy.get('.ion-color-primary'), 
        
        SuccessAlert:()=>cy.get('ion-toast.ion-color-success'),


    }
    NavigateToToptallaUAT(Email,Password) {
        cy.visit('https://partners.stg.toptalla.com/')
        cy.wait(3000)
        cy.url().then((url) => {
            if (!url.includes('/calendar')) {
                this.CheckLoginPageLoad()
                this.EnterEmail(Email)
                this.EnterPassword(Password)
                this.clickLoginButton()
                cy.wait(3000)
                this.CheckBoardPage()
            } else {
                this.CheckBoardPage()
            }
        });
    }
    CheckLoginPageLoad() {
        cy.wait(5000)
        cy.url().should('eq', 'https://partners.stg.toptalla.com/auth/sign-in')
    }
    CheckLoginPagetitle() {
        cy.title().should('eq', 'تسجيل دخول')
        this.elements.LoginLabel().should('be.visible')
    }
    EnterEmail(Email) {
        this.elements.EmailField().should('be.visible')
        this.elements.EmailField().type(Email)
        cy.wait(1000)
    }
    EnterPassword(Password) {
        this.elements.PasswordField().should('be.visible')
        this.elements.PasswordField().type(Password)
        cy.wait(1000)
    }
    clickLoginButton() {
        this.elements.LoginButton().should('be.visible')
        this.elements.LoginButton().invoke('removeAttr', 'target').click()
        cy.wait(8000)
    }
    CheckBoardPage() {
        cy.url().should('include', 'https://partners.stg.toptalla.com/calendar')
    }
    CheckSuccessMessage(){
        this.elements.SuccessAlert().should('exist')
    }
}

module.exports = new LoginPage();
