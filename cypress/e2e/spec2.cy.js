/// <reference types="cypress"/>

//const { beforeEach } = require("mocha")

describe('Cenario 02 - TRELLO', () => {
  beforeEach('Criar Quadro - LOGIN', () => {
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
  })

  it('Criar Quadro - Padrão', () => {
    cy.get('[data-testid="create-board-tile"] > .board-tile')
    .click()
    .wait(1000)
    cy.get('[data-testid="create-board-title-input"]')
    .type('Teste Quadro 1')
    .wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .bxgKMAm3lq5BpA')
    .click()
    .wait(1000)
    cy.get('[data-testid="create-board-submit-button"]')
    .click()
    .wait(4000)
  })

  it('Criar Quadro - Kanban', () => {
    cy.get('[href="/w/areadetrabalho65270775"] > .boards-page-board-section-header-options-item-name > span')
    .click()
    .wait(1000)
    cy.get('[href="https://trello.com/b/5FldI0TK/kanban-quadro-modelo"] > .qrelFBps7MQWSh')
    .click()
    .wait(1000)
    cy.get('.wide')
    .click()
    .wait(1000) 
    cy.get('form > .wide')
    .click()
    .wait(4000)
  })

  it('Criar e Excluir Quadro', () => {
    cy.get('[data-testid="create-board-tile"] > .board-tile')
    .click()
    .wait(1000)
    cy.get('[data-testid="create-board-title-input"]')
    .type('Teste Quadro 2')
    .wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .bxgKMAm3lq5BpA')
    .click()
    .wait(1000)
    cy.get('[data-testid="create-board-submit-button"]')
    .click()
    .wait(1000)
    cy.get('[data-testid="OverflowMenuHorizontalIcon"]')
    .click()
    .wait(1000)
    cy.get(':nth-child(5) > .board-menu-navigation-item-link')
    .click()
    .wait(1000)
    cy.get(':nth-child(5) > .board-menu-navigation-item > .board-menu-navigation-item-link')
    .click()
    .wait(1000)
    cy.get('.pop-over-content > :nth-child(1) > div > [data-testid]')
    .click()
    .wait(1000)
    cy.get('[data-testid="close-board-delete-board-button"]')
    .click()
    .wait(1000)
    cy.get('[data-testid="close-board-delete-board-confirm-button"]')
    .click()
    .wait(4000)
  })     
}) 


