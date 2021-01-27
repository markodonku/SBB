/// <reference types="Cypress" />

import LeisureHolidayPage from '../../support/PageObject/LisureHolidayPage'


describe('Testing  Leisure and Holiday page',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        
        cy.visit(Cypress.env('url')+'de/freizeit-ferien/freizeitangebote.html')

      })

    const leisurePage=new LeisureHolidayPage()


it('Gradient Image',function()
 {
     leisurePage.getGradientImage().should('be.visible')
})

it('Title and Lead color check', function()
{
    
    leisurePage.getTitle().should('have.css', 'color', this.data.colorBlack)
    leisurePage.getLead().should('have.css', 'color', this.data.colorBlack)

})

it('Leisure finder visible', function()
{
    leisurePage.getLeisureFinder().should('be.visible')
})

it('Leisure Teaser set', function()
{
    leisurePage.getTeaserSet().should('be.visible')
    leisurePage.getLeisureItem().its('length').should('be.gt', 1)
})

it('Link list visible', function()
{
    leisurePage.getLinkList().should('be.visible')
    leisurePage.getListItems().its('length').should('be.gt', 1)
})

})