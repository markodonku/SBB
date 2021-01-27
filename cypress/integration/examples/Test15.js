/// <reference types="Cypress" />

import LeisureHolidayPage from '../../support/PageObject/LisureHolidayPage'


describe('Testing Shops detail page',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        
        cy.visit(Cypress.env('url')+'de/bahnhof-services/am-bahnhof/bahnhoefe/bahnhof-bern/geschaefte/shop-detail.html/geo-migros-e50c')

      })

    const leisurePage=new LeisureHolidayPage()

    it('Language change is possible',function()
    {

        cy.get('.mod_langnav_desktop_list_item').each(($el, index, $list) => {
           
            if($el.hasClass('mod_langnav_desktop_list_item is_active'))
            {
     
                //cy.log($el.find('p').prop('lang'))
                cy.url().should('contain', '/'+$el.find('p').prop('lang')+'/')
                cy.log('ok')
            }
            
            else
            {
              //cy.get('.mod_langnav_desktop_linkitem').click()
              //cy.wait(2000)
              //cy.log($el.find('a').text())
              /*cy.get('.mod_langnav_desktop_linkitem_label').then(function(text)
              {
                  const language=text.text()
                  cy.log(language)
              })*/

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

