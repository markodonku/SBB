/// <reference types="Cypress" />

import TravelcardsTickets from '../../support/PageObject/TravelacardsTickets'


describe('Testing Greenclass page',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        
      })

    const travelcardsTickets=new TravelcardsTickets()

    it('Popular Topics are displayed',function()
    {
      cy.visit(Cypress.env('url')+'de/abos-billette/abonnemente/greenclass.html')
        travelcardsTickets.getPopularTopics().should('be.visible')
        if(cy.get('.mod_popular_topics_buttons').should('be.visible'))
        {
          cy.get('.mod_popular_topics_button').each(($el,index,$list)=>
          {
            expect($el.find('a')).to.have.attr('href')
          })
        }

        else
        {
          expect(cy.get('.mod_popular_topics_button_wrapper').find('a')).to.have.attr('href')
        }
    })

    it('Manual Teaser set is displayed', function()
    {
      travelcardsTickets.getManualTeaserItems().each(($el,index,$list)=>
      {
        expect($el).to.be.visible
      })
    })

    it('Campaign Teaser visible', function()
    {
      travelcardsTickets.getCampaignTeaser().each(($el,index,$list)=>
      {
        expect($el).to.be.visible
      })
    })

    it('General Supply Teaser visible', function()
    {
      travelcardsTickets.getGeneralSupplyTeaser().should('be.visible')
      travelcardsTickets.getGeneralSupplyItems().each(($el,index,$list)=>
      {
        expect($el).to.be.visible
      })
    })

    it('Social stream visible', function()
    {
      travelcardsTickets.getSocialStream().should('be.visible')
      travelcardsTickets.getSocialStream().find('.mod_lead_text').should('be.visible')
      travelcardsTickets.getSocialStream().find('.mod_footer_sociallist').each(($el,index,$list)=>
      {
        expect($el.find('a')).to.have.attr('href')
      })

    })

    it('Logo bar visible', function()
    {
      travelcardsTickets.getLogoBarItems().each(($el,index,$list)=>
      {
        expect($el.find('img')).to.be.visible
      })
    })

})