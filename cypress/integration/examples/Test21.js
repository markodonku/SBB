/// <reference types="Cypress" />

import TravelcardsTickets from '../../support/PageObject/TravelacardsTickets'


describe('Testing Form component',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        cy.visit(Cypress.env('url')+'de/abos-billette/kaufmoeglichkeiten/formular-erstattungsantrag/form-test-cypress.html')
      })

    const travelcardsTickets=new TravelcardsTickets()

    it('Submit message is displayed',function()
    {
        this.data.checkboxes.forEach(function(element) {

            cy.checkboxChecked(element)
          })

          travelcardsTickets.getNameInput().type(this.data.name)
          travelcardsTickets.getSurnameInput().type(this.data.surname)
          travelcardsTickets.getStreetInput().type(this.data.street)
          travelcardsTickets.getPLZ().type(this.data.PLZ)
          travelcardsTickets.getPlace().type(this.data.place)
          travelcardsTickets.getEmailInput().type(this.data.email)
          travelcardsTickets.getTelephoneInput().type(this.data.telephone)
          travelcardsTickets.getBestellnummer().type(this.data.bestell)
          travelcardsTickets.getMessageInput().type(this.data.message)
          travelcardsTickets.getSubmit().click()
          cy.wait(2000)
          cy.get('.mod_notification').then(function(element)
          {
            const actualText=element.text()
            expect(actualText.includes("erfolgreich übermittelt")).to.be.true
          })

    })

})