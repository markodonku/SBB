/// <reference types="Cypress" />

import CompanyPage from '../../support/PageObject/CompanyPage'
import promisify from 'cypress-promise'

describe('Testing Jobs and Careers page',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
      })

    const companyPage=new CompanyPage()


it('Video is playing', function()
{
    cy.visit('https://int-company.sbb.ch/de/jobs-karriere/beweg-die-schweiz-mit-uns/bahnberufe/berufsbild-lokfuehrerin.html')
    companyPage.getPortraitVideo().each(($el,index,$list)=>
    {
        cy.wait(1000)
        $el.find('.mod_video_button_play').click()
        expect($el.find('iframe')).to.have.class('mod_video_player')

    })
})

it('Open positions are displayed', function()
{
    companyPage.getOpenPositions().eq(0).as('positions')
    cy.get('@positions').find('li').each(($el,index,$list)=>
    {
        expect($el).to.be.visible
        cy.request($el.find('a').prop('href')).then((response)=>
        {
            expect(response.status).to.eq(200)
        })
    })
})

it('Quotes are displayed', function()
{
    //cy.visit('https://int-company.sbb.ch/de/jobs-karriere/beweg-die-schweiz-mit-uns/bahnberufe/berufsbild-lokfuehrerin.html')
    companyPage.getQuotes().each(($el,index,$list)=>
    {
        expect($el).to.be.visible
    })
})

it('Portrait switch works', async()=>
{
    companyPage.getPortraitSwitch().should('be.visible')
    
    let currentUrl = await new Promise(resolve => cy.url().then(tempVar => {
        resolve(tempVar)
    }))

    while(1){
        if(currentUrl.indexOf(link)!=-1){
        break;
        }
        
        cy.get('.mod_portrait_switch_link').eq(1).click()
        cy.wait(1000)
        var link = await promisify(cy.get('.mod_portrait_switch_link').eq(1).then($el => $el.attr('href')))
        
        }
})
})