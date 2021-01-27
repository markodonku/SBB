/// <reference types="Cypress" />

import LeisureHolidayPage from '../../support/PageObject/LisureHolidayPage'


describe('Testing Leisure and Holiday filter',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        
        cy.visit(Cypress.env('url')+'de/freizeit-ferien/ideen.html')

      })

    const leisurePage=new LeisureHolidayPage()


it('Filter visible',function()
 {
     leisurePage.getLeisureFinder().should('be.visible')
})

it('Leisure Search', function()
{
    
   leisurePage.getRegionSearchField().type('ber')
   cy.wait(3000)
   cy.get('.mod_autocomplete_suggestion').find('p').each(($el, index, $list) => {

    if($el.text()===this.data.leisureSearch)
    {
        $el.click()
    
   }
   cy.wait(2000)
   leisurePage.getSearchButton().click()
   cy.wait(2000)
   leisurePage.getSearchResults().should('be.visible')
})
})

it('Offer number check', function()
{
    if(leisurePage.getOfferItem().its('length').should('eq', 12))
    {
        leisurePage.getShowMoreButton().click()
        cy.wait(2000)
        leisurePage.getOfferItem().its('length').should('eq', 24)
    }
})

it('Offer can be opened',function()
{
    leisurePage.getOffer().then(function(el)
    {
        const link=el.prop('href')

        leisurePage.getOffer().click()
        cy.wait(2000)
        if(cy.url().should('include', link))
        {
            cy.log('Offer detail page is opened')
        }
        else
        {
            cy.log('Offer detail page is not opened')
        }
    })
})



})