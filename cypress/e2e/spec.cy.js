/// <reference types="cypress"/>

describe('Cenario 01 - TRELLO', () => {
  it('Login', () => {
    //O login é feito através do Atlassian, para evitar problmeas com autenticação
    cy.visit('https://id.atlassian.com/login')
    
    cy.on('uncaught:exception', (e) => {
      // Um erro esperado, do próprio atlassian, será ignorado
      return false
    })

    cy.get('#username').type('testescypress2@gmail.com').wait(1000)
    cy.get('#login-submit').click().wait(1000)

    cy.get('#password').type('cypressautomatizado').wait(1000)
    cy.get('#login-submit').click().wait(2000)

    //O Trello é acessado através da tela inicial do Atlassian
    cy.get('.sc-bdVaJa').click().wait(1000)    
  })
})

