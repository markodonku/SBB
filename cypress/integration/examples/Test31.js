/// <reference types="Cypress" />

import promisify from 'cypress-promise'
import CourseRegistrationPage from '../../support/PageObject/CourseRegistrationPage'

describe('Login CUG',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
      })

    const courseRegistrationPage=new CourseRegistrationPage()


it('Login works', function()
{
  cy.visit('https://int-company.sbb.ch/de/jobs-karriere/arbeiten-bei-der-sbb/cug-login-mitarbeitende.html')
  cy.get('#login_email').type(this.data.CUGuser)
  cy.get('#login_password').type(this.data.CUGpass)
  cy.get('.text__primarybutton').click()
  cy.wait(1000)
  cy.get('.mod_deeplinkteaser').should('be.visible')
})

})