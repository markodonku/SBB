/// <reference types="Cypress" />

import TravelcardsTickets from '../../support/PageObject/TravelacardsTickets'


describe('Testing bahnhof services detail page',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        
      })

    const travelcardsTickets=new TravelcardsTickets()

    it('Keyvisual is visible',function()
    {
        cy.visit(Cypress.env('url')+'de/abos-billette/abonnemente/halbtax.html')
        travelcardsTickets.getKeyvisual().should('be.visible')
    })

    it('Tooltips appear', function()
    {
        travelcardsTickets.getTooltip().click()
        cy.wait(1000)
        travelcardsTickets.getFootnote().should('be.visible')
        travelcardsTickets.getCloseButton().click()
        travelcardsTickets.getFootnote().should('not.be.visible')
    })

    it('Inline links work', function()
    {
        cy.accordionItem(TravelcardsTickets)
        cy.wait(1000)
        cy.get('#sbb245781_content').find('.text__actionlink').then(function(link)
        {
            var url=link.prop('href')
            cy.request(url).then((response)=>
            {
                expect(response.status).to.eq(200)
            })
        })
    })

    it('NBC component works as expected', async ()=>
    {
        travelcardsTickets.getNBCItem().each(($el,index,$list)=>
        {
            expect($el).to.be.visible
        })

        cy.wait(1000)
        cy.scrollTo('bottom')
        cy.wait(3000)

        await travelcardsTickets.getNBCItem().each(($el,index,$list)=>
        {
            expect($el.find('div')).to.have.class('mod_nbc_section is_scrolled is_set')
            cy.wait(1000)
        })
    })

    it('Anchor link on accordion work', function()
    {
        cy.visit(Cypress.env('url')+'de/abos-billette/abonnemente/halbtax.html#sbb6f4551')
        travelcardsTickets.getAccordion().topIsWithinViewport()
       
    })

    it('PDF can be downloaded', function()
    {
        cy.request('https://int-www.sbb.ch/content/dam/sbb/de/pdf/abos-billette/abonnemente/ga/karte-geltungsbereich-ga-halbtax-stand_d_barrierefrei.pdf.sbbdownload.pdf').then((xhr)=>
        {
            assert.isNotNull(xhr.allRequestResponses.body, 'Body not empty')
        })
    })

})

