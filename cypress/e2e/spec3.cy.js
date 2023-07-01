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
    cy.get('[data-testid="create-board-title-input"]').type('Teste Quadro 3').wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .bxgKMAm3lq5BpA').click().wait(1000)
    cy.get('[data-testid="create-board-submit-button"]').click().wait(1000)
    /*-----CRIAR QUADRO -------*/ 
  })

  it('Criar Card', () => {
    cy.get('.list-name-input')
    .type('Teste tarefa 1')
    .wait(1000)
    cy.get('.list-add-controls > .nch-button') 
    .click()
    .wait(1000) 
    cy.get('.open-card-composer > .icon-sm')
    .click()
    .wait(1000)
    cy.get('.list-card-composer-textarea')
    .type('Tarefa 1')
    .wait(1000)
    cy.get('.cc-controls-section > .nch-button')
    .click()
    .wait(1000)
    cy.get('.list-card-title')
    .click()
    .wait(1000)
    cy.get('.js-edit-labels > .js-sidebar-action-text')
    .click()
    .wait(1000)
    cy.get(':nth-child(1) > .x__X83c1QM1uFb > .faR06patL_ldVW > .dFag8JU1lt76jj > [data-testid="card-label"]')
    .dblclick()
    .wait(1000)    
    cy.get('[data-testid="popover-close"] > .css-1wits42')
    .click()
    .wait(1000)
    cy.get('.js-add-checklist-menu > .js-sidebar-action-text')
    .click()
    .wait(1000)
    cy.get('#id-checklist')
    .type('CheckList 1')
    .wait(1000)
    cy.get('form > .nch-button')
    .click()
    .wait(1000)
    cy.get('.checklist-new-item > .edit')
    .type('Fazer 1')
    .wait(1000)
    cy.get('.checklist-add-controls > .nch-button--primary')
    .click()
    .wait(1000)
    cy.get('.nch-button--subtle')
    .click()
    .wait(1000)
    cy.get('.js-show-details')
    .click()
    .wait(1000)
    cy.get('[data-testid="checklist-item-checkbox"]')
    .click()
    .wait(4000)
  
  })
})