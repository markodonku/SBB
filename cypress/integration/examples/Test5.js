/// <reference types="Cypress" />


describe('Testing Contentwide Teaser',function(){

    beforeEach(() => {
        // runs once before each test in the block
   
        cy.visit(Cypress.env('url')+"de/abos-billette.html")

      })

    


it('Contentwide Teaser',function()
 {
    cy.get('.layout_center').find('.mod_content_wide_teaser').should('be.visible')

 })

 it('Breadcrumb present', function()
 {
    cy.get('.mod_breadcrumb_list').should('be.visible') 
 })

 it('List is visible', function()
 {
     cy.get('.mod_overview_level2_list').should('be.visible')
 })

})