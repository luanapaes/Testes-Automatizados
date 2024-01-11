/// <reference types="Cypress"/>

describe('Testes Funcionais de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('.title').should('contain', 'Products')
    });
    it('Validando login incorreto', () => {
        cy.login_teste('standard_users', 'secret_sauce')//substitui todas as linhas de baixo
        /*cy.get('[data-test="username"]').type("standard_users")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()*/
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
    it('Validando senha incorreta', () => {
        cy.login_teste('standard_user', '102030')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
});