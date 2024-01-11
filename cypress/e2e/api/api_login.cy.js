/// <reference types="Cypress" />

describe('API - Teste Funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste1"
            }
        }).then((response) =>{
            expect(response).to.equal(sta)
        })
    });
});