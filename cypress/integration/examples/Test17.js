/// <reference types="Cypress" />

import CompanyPage from '../../support/PageObject/CompanyPage'
import promisify from 'cypress-promise'



describe('Company filter test',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        
        cy.visit('https://int-company.sbb.ch/de/medien/medienstelle/medienmitteilungen.html')

      })

    const companyPage=new CompanyPage()

    it('Filter works, results are displayed',function()
    {
       if(companyPage.getFilter().should('have.class', 'mod_accordion_item is_closed'))
       {
         companyPage.getFilterButton().click()
       }
       cy.wait(2000)
       
       //Date picker works with click
       /*cy.get('.mod_datepicker_openpicker').eq(0).click()       
       await promisify(cy.iterateDatePicker(companyPage))
       cy.log('zavrshuva')*/
       
       companyPage.getInputFieldFrom().clear().type(this.data.fromdate)
       companyPage.getInputFieldTo().clear().type(this.data.todate)
       cy.wait(1000)
       companyPage.getInputField().click()
       companyPage.getDropdown().select('Unternehmen')
       cy.wait(1000)

       companyPage.getResultList().should('be.visible').and('have.length.gt', 1)
       if(companyPage.getResetButton().should('be.visible'))
       {
         companyPage.getResetButton().find('button').click()
       }     
      })
})

