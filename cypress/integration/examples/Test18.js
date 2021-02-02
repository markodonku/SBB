/// <reference types="Cypress" />

import LeisureHolidayPage from '../../support/PageObject/LisureHolidayPage'


describe('Testing bahnhof services detail page',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        
        cy.visit('https://int-company.sbb.ch/de/medien/medienstelle/medienmitteilungen/detail.html/2017/10/3010-1')

      })

    const leisurePage=new LeisureHolidayPage()

    it('Language change is possible',function()
    {

        cy.get('.mod_langnav_desktop_list_item').each(($el, index, $list) => {
           
            if($el.hasClass('mod_langnav_desktop_list_item is_active'))
            {
                cy.url().should('contain', '/'+$el.find('p').prop('lang')+'/')
                cy.log('ok')
            }
            
            else
            {
              cy.visit($el.find('a').prop('href'))
              cy.wait(2000)

              cy.get('.mod_langnav_desktop_linkitem_label').then(function(text)
              {
                  const language=text.text()
                  expect($el.find('a').text()).to.contain(language)
              })

              if(cy.url().should('contain', '/'+$el.find('a').prop('lang')+'/'))
              {
                  cy.log('Language is OK') 
              }
              cy.wait(2000)


            }
        
        })
        
    })
})

