/// <reference types="Cypress" />

import HomePage from '../../support/PageObject/HomePage'

describe('Testing SwissPass login',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        
        
    })
      const homePage=new HomePage()

      it('Logged in',function()
      {
        cy.visit('https://www-int.swisspass.ch/oevlogin/login')  
        cy.get('#email').type(this.data.username)
        cy.get('#pwd').type(this.data.password)
        cy.get('#login_button').click()
        cy.wait(2000)
        cy.url().should('include', 'welcome')

        cy.get('.mod-metamenu--linktext.js-bubble-dropdown').then(function(user)
        {
            const logged=user.text()
            if(logged.includes(this.data.user))
            {
            cy.log('Icon is displayed')
            }
        })

      })

})