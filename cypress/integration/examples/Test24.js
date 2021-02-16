/// <reference types="Cypress" />

import TravelcardsTickets from '../../support/PageObject/TravelacardsTickets'


describe('Offer and Pricing module',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        cy.visit(Cypress.env('url')+'de/abos-billette/abonnemente/greenclass/angebot.html')
      })

    const travelcardsTickets=new TravelcardsTickets()

    it('Offer with and without image',function()
    {
        travelcardsTickets.getOfferModule().each(($el,index,$list)=>
        {
            expect($el).to.be.visible
        })
    })

})