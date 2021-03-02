/// <reference types="Cypress" />

describe('Testing redirecting function',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
      })

    const courseRegistrationPage=new CourseRegistrationPage()


it('Redirection works', function()
{
  cy.visit('https://int-www.sbb.ch/de/abos-billette/abonnemente/testpage/testpage-redirect')
  cy.wait(1000)
  cy.url().should('equal', 'https://int-www.sbb.ch/de/abos-billette/abonnemente/testpage.html')
})

})