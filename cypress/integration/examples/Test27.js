/// <reference types="Cypress" />

import CompanyPage from '../../support/PageObject/CompanyPage'

describe('Testing video snippets',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
      })

    const companyPage=new CompanyPage()


it('Video is playing, play/pause button works', function()
{
    cy.visit('https://int-company.sbb.ch/de/jobs-karriere/beweg-die-schweiz-mit-uns/bahnberufe.html')
    companyPage.getVideo().find('li').should('be.visible').and('have.class','mod_video_snippet_video_list_item is_active')

    if(companyPage.getPlayButton().should('be.visible'))
    {
        companyPage.getPlayButton().click()
        companyPage.getPlayButton().should('have.class','mod_video_snippets_teaser_play_button_wrapper is_paused')
    }
})

it('Display of Deep Link Teaser', function()
{
    companyPage.getDeepLinkTeaser().each(($el,index,$list)=>
    {
        expect($el).to.be.visible
        expect($el.find('.mod_image_inner_wrapper')).to.be.visible
        expect($el.find('.mod_image_inner_wrapper.var_avatar')).to.be.visible
        expect($el.find('.mod_teaserelement_wrapper')).to.be.visible

    })
})
})