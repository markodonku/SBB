/// <reference types="Cypress" />


describe('White link title',function(){

    beforeEach(() => {
        // runs once before each test in the block
   
        cy.fixture('example').then(function(data)
        {
          this.data=data
        })

        cy.visit(Cypress.env('url')+"de/freizeit-ferien.html")

      })

    


it('Leisure&Holiday Teaser',function()
 {
   cy.wait(2000)
   cy.get('.mod_lh_teaser_homepage_teasers_list_item').find('h3').each(($el,index,$list)=>{
       
       expect($el).to.have.css('color', this.data.titleColor)

   })
 })

})