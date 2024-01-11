/// <reference types="Cypress" />


//página que será testada
const url = 'https://www.saucedemo.com/'

describe('Teste E2E - realizando a compra de produtos com sucesso', () => {
    it('Fluxo da compra de produtos', () => {
        cy.visit(url)
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('.title').should('contain', 'Products')

        //ordenar produtos de maior para menor valor:
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
        //validação da ordenação dos produtos:
        cy.ordenacaoProdutos()

        //adicionando produtos ao carrinho:
        cy.addProdutosAoCarrinho()

        //checagem da quantidade de produtos adicionados ao carrinho:
        cy.get('.shopping_cart_link').should('have.text', '3')

        
        //abrir carrinho de compras:
        cy.get('.shopping_cart_link').click()

        //checar produtos do carrinho novamente:
        cy.verificaProdutos()

        //ir para a página de add info do cliente:
        cy.get('.btn_action').click()

        //adicionar informações do cliente:
        cy.informacoesCliente()

        //checar produtos do carrinho novamente:
        cy.verificaProdutos()

        //finalizar compra:
        cy.get('.summary_total_label').should('have.text', 'Total: $36.69')
        cy.get('[data-test="finish"]').click()

        //verificando se a mensagem de sucesso apareceu:
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')

    });
   
});