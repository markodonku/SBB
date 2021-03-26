/// <reference types="Cypress" />

describe('Testing PDF download',function(){

it('Download PDF file from the table', function()
{
  cy.visit('https://int-www.sbb.ch/de/fahrplan/online-fahrplan/pdf-fahrplaene/abfahrtsplakate.html?search=bern&_charset_=UTF-8&page=1')
  cy.wait(1000)
  cy.get('.mod_table_table > tbody > tr:nth-child(1) > td:nth-child(2)').find('a').then((element)=>
  {
    var link=element.prop('href')
    //cy.log(link)

    cy.request(link).then((response)=>
    {
    expect(response.status).to.eq(200)
    cy.writeFile("cypress/downloads/test2.pdf", response.body)
    cy.readFile("cypress/downloads/test2.pdf")
    })
  })
})

})