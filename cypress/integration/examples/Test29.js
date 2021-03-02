/// <reference types="Cypress" />

import promisify from 'cypress-promise'
import CourseRegistrationPage from '../../support/PageObject/CourseRegistrationPage'

describe('Course registration',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
      })

    const courseRegistrationPage=new CourseRegistrationPage()


it('Display of courses in Accordion', function()
{
    cy.visit('https://int-www.sbb.ch/de/fahrplan/mobile-fahrplaene/sbb-mobile/seniorenschulungen/schulzug.html')
   courseRegistrationPage.getCourseAccordion().click()
   courseRegistrationPage.getCourseLocation().should('be.visible')
   courseRegistrationPage.getBookingDay().should('be.visible')
   courseRegistrationPage.getDuration().should('be.visible')
   courseRegistrationPage.getCourseLanguage().should('be.visible')
   courseRegistrationPage.getCourseAvailability().should('be.visible')
   courseRegistrationPage.getRegistrationButton().should('be.visible')
   
})

it('Registration Form is opened', function()
{
    courseRegistrationPage.getRegistrationButton().click()
    cy.wait(2000)
    cy.get('.mod_form.var_columns').should('be.visible')
})

})