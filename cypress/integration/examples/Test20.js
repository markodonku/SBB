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

    it('NBC component works as expected', function()
    {
        cy.visit(Cypress.env('url')+'de/abos-billette/abonnemente/halbtax.html')
        travelcardsTickets.getNBCItem().each(($el,index,$list)=>
        {
            expect($el).to.be.visible
            //cy.contains($el).scrollIntoView()
        })
        
        cy.wait(1000)
        cy.scrollTo('bottom')
        cy.wait(3000)

        travelcardsTickets.getNBCItem().each(($el,index,$list)=>
        {
            //var klasa=$el.find('div').attr('class')
            expect($el.find('div').attr('class')).includes('is_scrolled', 'is_set')

            //Checking the class by element index
            /*if(index===0)
            {
            expect($el.find('div')).to.have.class('mod_nbc_section is_scrolled is_set')
            }
            else
            {
                expect($el.find('div')).to.have.class('mod_nbc_section is_set is_scrolled')
            }*/
        })
    })

    it('Anchor link on accordion work', function()
    {
        cy.visit(Cypress.env('url')+'de/abos-billette/abonnemente/halbtax.html#sbb6f4551')
        travelcardsTickets.getAccordion().topIsWithinViewport()
       
    })

    it('PDF can be downloaded', function()
    {
          cy.request('https://int-www.sbb.ch/content/dam/sbb/de/pdf/abos-billette/abonnemente/ga/karte-geltungsbereich-ga-halbtax-stand_d_barrierefrei.pdf.sbbdownload.pdf').then(function(response)
          {
                expect(response.status).to.eq(200)
                cy.writeFile("cypress/downloads/test1.pdf", response.body)
                cy.readFile("cypress/downloads/test1.pdf")
          })

    })

})

