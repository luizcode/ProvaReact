/// <reference types="cypress"/>

describe('App.Bet', () => {
    it('Fazer cadastro de usuario', () => {
        cy.visit("http://localhost:3000/registration");
        cy.get(':nth-child(1) > .sc-pVTFL').type("admin");
        cy.get(':nth-child(2) > .sc-pVTFL').type("admin@admin.com");
        cy.get(':nth-child(3) > .sc-pVTFL').type("admin123");

        cy.get('.sc-eCImPb > :nth-child(2) > .sc-hKwDye').click();
    });

    it("Fazer login de usuario", () => {
        cy.get(':nth-child(1) > .sc-pVTFL').type("admin@admin.com");
        cy.get(':nth-child(2) > .sc-pVTFL').type("admin123");
        cy.get('.sc-eCImPb > :nth-child(2)').click();
    });


});