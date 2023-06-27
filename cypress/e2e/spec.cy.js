/// <reference types="cypress"/>

describe('Cenario 01 - TRELLO', () => {
  it('Login', () => {
    cy.visit('https://trello.com/')
    cy.wait(1000)

    cy.get('.Buttonsstyles__ButtonGroup-sc-1jwidxo-3 > [href="/login"]').click()
    cy.wait(1000)

    cy.get('#user').type('testescypress2@gmail.com')
    cy.wait(1000)

    cy.get('#login').click()
    cy.wait(1000)

    cy.get('#password').type('cypressautomatizado')

    cy.get('#password').type('{enter}')
    



    

  })
})

