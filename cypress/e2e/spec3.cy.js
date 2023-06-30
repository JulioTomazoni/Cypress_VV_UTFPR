/// <reference types="cypress"/>

//const { beforeEach } = require("mocha")

describe('Cenario 03 - TRELLO', () => {
  beforeEach('Criar Card', () => {
    /*----- LOGIN -------*/
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
    /*----- LOGIN -------*/
    /*-----CRIAR QUADRO -------*/
    cy.get('[data-testid="create-board-tile"] > .board-tile').click().wait(1000)
    cy.get('[data-testid="create-board-title-input"]').type('Teste Quadro').wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .bxgKMAm3lq5BpA').click().wait(1000)
    cy.get('[data-testid="create-board-submit-button"]').click().wait(1000)
    /*-----CRIAR QUADRO -------*/ 
  })

  it('Criar Card', () => {

    cy.get('.list-name-input')
      .type('Teste lista 1')
      .wait(1000)
    cy.get('.list-add-controls > .nch-button') 
      .click()
      .wait(1000)
  
  })
})