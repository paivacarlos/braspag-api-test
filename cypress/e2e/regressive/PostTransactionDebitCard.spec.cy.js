/// <reference types="cypress" />

import PayloadTransactionDebitCardWithSucess from '../../fixtures/TransactionDebitCard/2xx/TransactionDebitCardWithSucess.js'

describe('API test transaction debit card', () => {

    it('Should be transaction debit card with success!', () => {
        const body_request = PayloadTransactionDebitCardWithSucess
    
        cy.request({
            method: 'POST',
            url:`${Cypress.env('test_env')}/v2/sales/`,
            failOnStatusCode: false,
            headers: {
                "MerchantId": Cypress.env('MerchantId'),
                "MerchantKey": Cypress.env('MerchantKey')
            },
            body: body_request
        }).then((response) => {
            expect(response.status).to.be.equal(201)
            
        })
    })

  })