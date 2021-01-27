/// <reference types="Cypress" />

import BahnhofServicesPage from '../../support/PageObject/BahnhofServicesPage'


describe('Shops bage/filter test',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        
        cy.visit(Cypress.env('url')+'/de/bahnhof-services/am-bahnhof/bahnhoefe/shopville-zuerich-hauptbahnhof.html')

      })

    const bahnhofServices=new BahnhofServicesPage()


it('Shops badge apears',function()
 {
    bahnhofServices.getShopBadge().should('be.visible')
 })

 it('Shops are displayed', function()
 {
     bahnhofServices.getShopBadge().click()
     cy.wait(2000)
     bahnhofServices.getOpenShops().find('.mod_shops_services_list').should('be.visible')
     cy.get('.mod_shops_services_listitem').its('length').should('be.gt', 1)

     bahnhofServices.getTabAllShops().click()
     cy.wait(2000)
     bahnhofServices.getAllShops().find('.mod_shops_services_list').should('be.visible')
     cy.get('.mod_shops_services_listitem').its('length').should('be.gt', 1)
 })

 it('Filter works', function()
 {
    bahnhofServices.getShopBadge().click()
    cy.wait(2000)
    bahnhofServices.getFilterInput().type('ama')
    cy.wait(2000)
    cy.get('.mod_autocomplete_suggestion').find('p').each(($el,index,$list) =>
    {
        const name=$el.text()
        //cy.log(name)
        if(name===this.data.shopName)
        {
            $el.click()
        }
    })
    bahnhofServices.getOpenShops().find('.mod_shops_services_list').should('be.visible')
 })
})

