/// <reference types="Cypress" />

import BahnhofServicesPage from '../../support/PageObject/BahnhofServicesPage'


describe('Bahnhof services page',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        
        cy.visit(Cypress.env('url')+'/de/bahnhof-services/am-bahnhof/bahnhoefe.html')

      })

    const bahnhofServices=new BahnhofServicesPage()


it('Auto suggest',function()
 {
     bahnhofServices.getInputField().type('bas')
     cy.wait(2000)

     cy.get('.mod_autocomplete_suggestion').find('p').each(($el, index, $list) => {
    
        const station=$el.text()
        if(station.includes(this.data.stationName))
        {
            $el.click()
            cy.wait(2000)
            if(bahnhofServices.getBahnhofTitle().should('contain', this.data.stationName))
            {
                cy.log('Auto suggest work')
            }

        }
    })
 })

 it('Map is visible', function()
 {
     bahnhofServices.getMapButton().click()
     cy.wait(2000)
     bahnhofServices.getMap().should('be.visible')

     bahnhofServices.getMarkers().each(($el, index, $list) => {

        expect($el).to.be.visible

     })
 })
})

