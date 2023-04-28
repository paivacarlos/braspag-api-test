/// <reference types="cypress" />

import data from '../../fixtures/TransactionCreditCard/2xx/TransactionCreditCardWithSucess.js'
import PayloadWithoutMerchantOrderId from '../../fixtures/TransactionCreditCard/4xx/TransactionCreditCardWithoutMerchandOrderId.js'
import PayloadWithoutCustumerName from '../../fixtures/TransactionCreditCard/4xx/TransactionCreditCardWihtoutCustumerName.js'

describe('API test transaction credit card', () => {

    it('Should be transaction credit card with success!', () => {
        const body_request = data
    
        cy.request({
            method: 'POST',
            url:`${Cypress.env('test_env')}/v2/sales/`,
            failOnStatusCode: true,
            headers: {
                "MerchantId": Cypress.env('MerchantId'),
                "MerchantKey": Cypress.env('MerchantKey')
            },
            body: body_request
        }).then((response) => {
            expect(response.status).to.be.equal(201)
            expect(response.statusText).to.be.equal('Created')
            expect(response.body.MerchantOrderId).not.to.be.null
            expect(response.body.MerchantOrderId).not.to.be.empty
            expect(response.body.Payment.AcquirerTransactionId).not.be.null
            expect(response.body.Payment.AcquirerTransactionId).not.be.empty
            expect(response.body.Payment.ProofOfSale).not.be.null
            expect(response.body.Payment.ProofOfSale).not.be.empty
            expect(response.body.Payment.AuthorizationCode).not.be.null
            expect(response.body.Payment.AuthorizationCode).not.be.empty
            expect(response.body.Payment.PaymentId).not.be.null
            expect(response.body.Payment.PaymentId).not.be.empty
            expect(response.body.Payment.ReceivedDate).not.null
            expect(response.body.Payment.ReceivedDate).not.be.empty
            expect(response.body.Payment.CapturedDate).not.null
            expect(response.body.Payment.CapturedDate).not.be.empty
            expect(response.body.Payment.CapturedAmount).be.equal(10000)
            expect(response.body.Payment.CapturedDate).not.be.null
            expect(response.body.Payment.CapturedDate).not.be.empty
            expect(response.body.Payment.ReasonMessage).to.be.equal('Successful')
            expect(response.body.Payment.Status).to.be.equal(2)
            expect(response.body.Payment.ProviderReturnCode).to.be.equal('6')
            expect(response.body.Payment.ProviderReturnMessage).to.be.equal('Operation Successful')
        })
    })

    it('Should be BadRequest because MerchantOrderId is required', () => {
        const body_request = PayloadWithoutMerchantOrderId
    
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
            expect(response.status).to.be.equal(400)
            expect(response.body[0].Code).to.be.equal(122)
        })
    })

    it('Should be BadRequest because Customer Name is required', () => {
        const body_request = PayloadWithoutCustumerName
    
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
            expect(response.status).to.be.equal(400)
            expect(response.body[0].Code).to.be.equal(105)
        })
    })

  })