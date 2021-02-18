/// <reference types="Cypress" />

import CampaignPage from '../../support/PageObject/CampaignPage'


describe('Campaign Page',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
      })

    const campaignPage=new CampaignPage()

    it('Large Key visual is displayed',function()
    {
       cy.visit('https://int-www.sbb.ch/de/kampagne/testcontent-campaign.html')
       campaignPage.getLargeKeyVisual().should('be.visible')
    })

    it('Arrow icon is displayed', function()
    {
      campaignPage.getArrowButton().should('be.visible')
    })

    it('Pagination is visible', function()
    {
      campaignPage.getArrowButton().click()
      cy.wait(2000)
      campaignPage.getPagination().should('be.visible')
    })

    it('Diagonal variant', function()
    {
      campaignPage.getFullWidthItem().each(($el,index,$list)=>
      {
        const variant=$el.attr('class')
        expect(variant).to.include('var_diagonal')
      })
    })

    it('Background color alternate', function()
    {
      cy.backgroundColor(CampaignPage)
    })

    it('Animation image automativcally played', function()
    {
      cy.contains('Animation Image Component').scrollIntoView()
      cy.wait(1000)
      cy.get('.layout_columns_main.var_no_nbc').each(($el,index,$list)=>
      {
        if($el.find('h2').text().includes('Animation Image Component'))
        {
          expect($el.find('button')).to.not.have.class('mod_gif_play_button_wrapper is_paused')
        }
      })
    })

})