/// <reference types="Cypress" />

import CompanyPage from '../../support/PageObject/CompanyPage'

describe('Testing Company Page',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        
        cy.visit(Cypress.env('urlcompany'))

      })

    const companyPage=new CompanyPage()


it('Slider title color',function()
 {

    companyPage.getSliderTitle().each(($el, index, $list)=>
    {
        if(expect($el).to.have.css('color', this.data.titleColor))
        {
            cy.log('Title color is correct')
        }
        else
        {
            cy.log('Title color is not correct')
        }

    })

})

it('Slide elemets visible', function()
{

    if(companyPage.getSliderTitle().its('length').should('be.gt',1))
    {
        cy.get('.mod_homepage_main_teaser_slider').should('be.visible')
    }

})
})