/// <reference types="Cypress" />
import HomePage from '../../support/PageObject/HomePage'

describe('Testing internal search',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })

        cy.visit(Cypress.env('url'))
      })

      const homePage=new HomePage()

it('First search attempt', function()
{
  homePage.getSearchButton().click()
  homePage.getInputSearchField().type(this.data.firstInternalSearch)
  homePage.getSubmitSearch().click()
  cy.wait(1000)
  cy.get('.mod_searchresults_list.var_all').find('li').each(($el,index,$list)=>
  {
    var itemURL=$el.find('a').prop('href')

    if($el.find('h3').text().includes('Velobillette für den Veloselbstverlad'))
    {
       expect(itemURL).to.be.equals('https://int-www.sbb.ch/de/abos-billette/billette-schweiz/velobillette.html')
       cy.url().should('eq', 'https://int-www.sbb.ch/de/meta/seiten/suche.html?search=Velo+mitnehmen&_charset_=UTF-8&page=1')
    }
   
  })
})

it('Second search attempt', function()
{
  homePage.getSearchButton().click()
  homePage.getInputSearchField().type(this.data.secondInternalSearch)
  homePage.getSubmitSearch().click()
  cy.wait(1000)
  cy.get('.mod_searchresults_list.var_all').find('li').each(($el,index,$list)=>
  {
    var itemURL=$el.find('a').prop('href')

    if($el.find('h3').text().includes('Das Halbtax'))
    {
       expect(itemURL).to.be.equals('https://int-www.sbb.ch/de/abos-billette/abonnemente/halbtax.html')
       cy.url().should('eq', 'https://int-www.sbb.ch/de/meta/seiten/suche.html?search=Halbtax&_charset_=UTF-8&page=1')
    }
   
  })
})
})