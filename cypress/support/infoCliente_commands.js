/// <reference types="Cypress" />

//adiciona as informações do cliente aos campos
Cypress.Commands.add('informacoesCliente', () => {
    cy.get('[data-test="firstName"]').type('Luana')
    cy.get('[data-test="lastName"]').type('França')
    cy.get('[data-test="postalCode"]').type('51240-555')
    cy.get('[data-test="continue"]').click()
})