/// <reference types="Cypress" />

describe('Validação de formulario', () => {
    it('validação realizada com sucesso', () => {
        cy.visit('file:///C:/Users/notebook/Documents/Testes%20Automatizados/cypress/telas/login.html?user=luana%40gmail.com&pass=102030')
        cy.get('.input-email').type('luana@gmail.com')
        cy.get('.input-senha').type('102030')
        cy.get('.entrar').click()
        cy.get('.title').should('contain', 'Bem-Vindo!')
    });
});