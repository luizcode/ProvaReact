/// <reference types="cypress"/>

describe('App.Bet', () => {
    it('Fazer cadastro de usuario', () => {
        cy.visit("http://localhost:3000/");
        cy.get('.gYoDgS').click();
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

    it("Fazer aposta de mega", () => {
        cy.get('.sc-bqiRlB').click();
        cy.get('.khnSrR').click();
        Cypress._.times(3, () => {
            cy.get('.sc-AjmGg > :nth-child(1) > :nth-child(1)').click();
            cy.get('.sc-hUpaCq').click();
        })
    })

    it("Fazer aposta da lotofacil", () => {
        cy.get('.lePWaS').click();
        Cypress._.times(3, () => {
            cy.get('.sc-AjmGg > :nth-child(1) > :nth-child(1)').click();
            cy.get('.sc-hUpaCq').click();
        })
    })

    it("Fazer aposta da quina", () => {
        cy.get('.eLVxCv').click();
        Cypress._.times(3, () => {
            cy.get('.sc-AjmGg > :nth-child(1) > :nth-child(1)').click();
            cy.get('.sc-hUpaCq').click();
        })
    })

    it("Fazer aposta do jogo do bixo", () => {
        cy.get('.cRLrbx').click();
        Cypress._.times(3, () => {
            cy.get('.sc-AjmGg > :nth-child(1) > :nth-child(1)').click();
            cy.get('.sc-hUpaCq').click();
        })
    })

    it("Salvar o game", () => {
        cy.get('.sc-dJjYzT').click();
    })


});