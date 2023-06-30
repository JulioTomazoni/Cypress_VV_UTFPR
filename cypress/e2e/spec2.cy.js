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
      .type('Teste Quadro')
      .wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .bxgKMAm3lq5BpA')
      .click()
      .wait(1000)
    cy.get('[data-testid="create-board-submit-button"]')
      .click()
      .wait(1000)
  })

  it('Criar Quadro - Kanban', () => {
    cy.get('[href="https://trello.com/b/5FldI0TK/kanban-quadro-modelo"] > .qrelFBps7MQWSh')
      .click()
      .wait(1000)
    cy.get('.wide')
      .click()
      .wait(1000) 
    cy.get('form > .wide')
      .click()
      .wait(1000)
  })

  it('Excluir Quadro', () => {
    //Definir {i} para a quantidades de cards que se deseja excluir
    //O máximo de quadros que se pode criar sem conta premium no trello são 10
    for (let i = 2; i >= 1; i--) {
      cy.get(':nth-child('+`${i}`+') > .board-tile > .board-tile-details')
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
        .wait(1000)
    }
  })     
}) 


