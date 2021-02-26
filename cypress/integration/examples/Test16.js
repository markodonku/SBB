/// <reference types="Cypress" />

import SearchPage from '../../support/PageObject/SearchPage'


describe('Global search testing',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        
        cy.visit(Cypress.env('urlsearch'))

      })

    const searchPagee=new SearchPage()

    it('Tabs are visible',function()
    {
        searchPagee.getSearchInput().type(this.data.searchItem)
        searchPagee.getSubmit().click()
        cy.wait(2000)
        searchPagee.getTabs().each(($el,index,$list) =>{
            expect($el).to.be.visible
        })


    })
})

