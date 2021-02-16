/// <reference types="Cypress" />

describe('Cargo search',function(){

    it('Cargo media releases', function()
    {
      cy.visit('https://int-www.sbbcargo.com/de/medien/cargo-medienmitteilungen.html')
      getAllLinksChecked(1)
      cy.get('.mod_pagination_list').find('li').then((item)=>
      {
        var maxPages=parseInt(item[item.length-2].children[0].getAttribute("data-url").split("&page=")[1]);
        var i=2;
       for(i=2;i<=maxPages;i++)
        {
          getAllLinksChecked(i)
        }

      })
     
    })
})

 async function getAllLinksChecked(page){

  cy.visit('https://int-www.sbbcargo.com/de/medien/cargo-medienmitteilungen.html?page=' + page);

  await cy.get('.mod_pressreleases_excerpt_item').each(($el,index,$list)=>
  {
      expect($el.find('a').prop('href')).to.contain('/'+'cargo-medienmitteilungen'+'/')
  })
  
}