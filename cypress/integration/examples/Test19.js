/// <reference types="Cypress" />

describe('Cargo search',function(){

    it('Cargo media releases', function()
    {
      var maxPages=40;
       var i=1;
       for(i=1;i<=maxPages;i++)
       {
        getAllLinksChecked(i)
        cy.wait(2000)
       }   
    })
})

 async function getAllLinksChecked(page){

  cy.visit('https://int-www.sbbcargo.com/de/medien/cargo-medienmitteilungen.html?page=' + page);

  await cy.get('.mod_pressreleases_excerpt_item').each(($el,index,$list)=>
  {
      expect($el.find('a').prop('href')).to.contain('/'+'cargo-medienmitteilungen'+'/')
  })
  
}