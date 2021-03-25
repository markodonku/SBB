/// <reference types="Cypress" />

import HomePage from '../../support/PageObject/HomePage'

describe('Testing Home Page',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        
        

      })

    const homePage=new HomePage()


it('Logo is visible',function()
 {
   cy.visit(Cypress.env('url')+'?bsdfbgh')
   homePage.getSBBLogo().should('be.visible')

 })
 
 it('Main Teaser title color',function()
 {      
    homePage.getMainTeaserTitle().each(($el,index,$list)=>
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

 it('Main Teaser indicators',function()
 {  
    if(homePage.getMainTeaser().its('length').should('be.gt',1))
    {
        cy.get('.mod_homepage_main_teaser_slider').should('be.visible')
    }
 })

it('Teaser linked',function()
{
    homePage.getMainTeaser().find('.mod_homepage_main_teaser_item_link').each(($el,index,$list)=>
    {
       
       if($el.attr("href").includes('#'))
       {
           cy.log('Teaser image is not linked')
       }
       else
       {
           cy.log('Teaser image is linked')
       }
    })
})

it('Leisure finder visible',function()
{

    homePage.getLeisureFinder().should('be.visible')

})

it('Header icons visible',function()
{
    homePage.getHeaderIcons().each(($el,index,$list)=>
    {
        expect($el).to.be.visible
    })
})

it('Footer',function()
{
    homePage.getFooterClock().should('be.visible')
    homePage.getSwissLogo().should('be.visible')
})

it('Header expandable',function()
{
    cy.wait(2000)
    cy.scrollTo('bottom')
    cy.wait(2000)
    homePage.getHeaderMenu().click({force: true})
    if(homePage.getHeader().should('have.class', 'mod_header is_rolledup navigation_is_open'))
    {
        cy.log('Navigation menu is opened')
    }
    
})

it('F&FBadgeVisible',function()
{
    cy.scrollTo('top')
    cy.wait(1000)
    homePage.getLeisureHoliday().trigger('mouseover')
    cy.wait(2000)
    homePage.getBadge().should('be.visible')

})

it('Login overlay',function()
{
    cy.get('[data-metanav="profile"] > .mod_metanav_linkitem').click()
    cy.wait(3000)
    if(homePage.getOverlay().should('be.visible'))
    {
        cy.log('Overlay is opened')
    }
})

})