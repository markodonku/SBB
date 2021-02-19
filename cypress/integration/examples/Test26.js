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


it('Iteration through bubbles, videos snippets OK', function()
{
    cy.visit('https://int-company.sbb.ch/de/jobs-karriere/beweg-die-schweiz-mit-uns.html?fsef')

    companyPage.getBubbles().find('>li').then(function(broj)
    {
        const number=broj.length
        
        for(var i=0;i<number;i++)
        {
            companyPage.getBubbles().find('>li').eq(i).should('have.class','mod_video_snippets_teaser_bubbles_list_item is_active')
            companyPage.getVideo().find('>li').eq(i).should('have.class','mod_video_snippet_video_list_item is_active')
            cy.wait(4000)
        }
    })
})

it('Play/Pauze button ok', function()
{
    companyPage.getPlayButton().should('be.visible')
    companyPage.getPlayButton().click()
    companyPage.getPlayButton().should('have.class','mod_video_snippets_teaser_play_button_wrapper is_paused')
})

it('Teaser bubbles url works', function()
{
    cy.get('.mod_videobubble').each(($el,index,$list)=>
    {
        cy.request($el.find('a').prop('href')).then((response)=>
        {
            expect(response.status).to.eq(200)
        })
    })
})
})