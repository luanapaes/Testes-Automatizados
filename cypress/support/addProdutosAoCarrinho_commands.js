/// <reference types="Cypress" />


//adiciona produtos com essas descrições ao carrinho
Cypress.Commands.add('addProdutosAoCarrinho', () => {
    cy.contains('Sauce Labs Onesie').click()
    cy.get('.btn_primary').click()
    cy.get('.inventory_details_back_button').click()

    cy.contains('Sauce Labs Bike Light').click()
    cy.get('.btn_primary').click()
    cy.get('.inventory_details_back_button').click()

    cy.contains('Sauce Labs Bolt T-Shirt').click()
    cy.get('.btn_primary').click()
    cy.get('.inventory_details_back_button').click()
})