/// <reference types="Cypress" />

import TravelcardsTickets from '../../support/PageObject/TravelacardsTickets'


describe('Testing Promo-Code',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        cy.visit(Cypress.env('url')+'de/abos-billette/kaufmoeglichkeiten/abos-und-billette-kaufen.html')
      })

    const travelcardsTickets=new TravelcardsTickets()

    it('Accordion entries can be opened',function()
    {
        cy.accordionItemOpens(TravelcardsTickets)
        cy.wait(1000)
        travelcardsTickets.getAccordionItem().each(($el,index,$list)=>
        {
          expect($el).to.have.class('mod_accordion_item is_open is_visible')
        })
        cy.wait(1000)
        cy.accordionItemCloses(TravelcardsTickets)
        cy.wait(1000)
        travelcardsTickets.getAccordionItem().each(($el,index,$list)=>
        {
          expect($el).to.have.class('mod_accordion_item is_closed')
        })
    })

    it('Accordion is centered',function()
    {
      cy.get('.mod_accordion').then((element)=>
      {
        const rightMargin=element.css('margin-right')
        var right=rightMargin.split("p")
        right=right[0].trim()
        const rightNum=Number(right)
        var position=element.position()
        
        expect(position.left).to.be.eq(rightNum)
      })
    })

    it('Payment List visible',function()
    {
      travelcardsTickets.getPaymentList().find('.mod_payment_options_option').each(($el,index,$list)=>
      {
        expect($el.find('img')).to.be.visible
      })
    })

    it('Promo Code visible', function()
    {
      travelcardsTickets.getPromoCodeText().should('be.visible')
      travelcardsTickets.getPromoCodeInput().should('be.visible')
      travelcardsTickets.getPromoCodeSubmit().should('be.visible')
    })

})