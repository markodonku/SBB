// ***********************************************
import promisify from 'cypress-promise'
import TravelcardsTickets from '../support/PageObject/TravelacardsTickets'
import CampaignPage from '../support/PageObject/CampaignPage'
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


const compareColor = (color, property) => (targetElement) => {
    const tempElement = document.createElement('div');
    tempElement.style.color = color;
    tempElement.style.display = 'none'; // make sure it doesn't actually render
    document.body.appendChild(tempElement); // append so that `getComputedStyle` actually works
  
    const tempColor = getComputedStyle(tempElement).color;
    const targetColor = getComputedStyle(targetElement[0])[property];
  
    document.body.removeChild(tempElement); // remove it because we're done with it
  
    expect(tempColor).to.equal(targetColor);
};

Cypress.Commands.overwrite('should', (originalFn, subject, expectation, ...args) => {
    const customMatchers = {
        'have.backgroundColor': compareColor(args[0], 'backgroundColor'),
        'have.color': compareColor(args[0], 'color'),
    };
  
    // See if the expectation is a string and if it is a member of Jest's expect
    if (typeof expectation === 'string' && customMatchers[expectation]) {
        return originalFn(subject, customMatchers[expectation]);
    }
    return originalFn(subject, expectation, ...args);
});



Cypress.Commands.add("dragTo", { prevSubject: "element" }, (subject, targetEl) => {
    cy.wrap(subject, {force: true}).trigger("dragstart", {force: true});
    cy.get(targetEl, {force:true}).trigger("drop", {force: true});
  }
);


Cypress.Commands.add("iterateDatePicker", (companyPage) => {
    (async ()=>{
        do{
            cy.get('.mod_datepicker_picker_header_button.mod_datepicker_picker_header_year_next').eq(0).click()
            var godina = await promisify(companyPage.getYear().eq(0).then($el => $el.text()))
           }
          while (godina<2018)   
    }) ()
    
});


Cypress.Commands.add("yearTo", (companyPage) => {
    (async()=>{

        var to = await promisify(companyPage.getYearFirst().find('h2').then($el => $el.text()))
        cy.log(to)

    })  ()
})



const travelcardsTickets=new TravelcardsTickets()
Cypress.Commands.add("accordionItem", (TravelcardsTickets) => { 
    travelcardsTickets.getSecondAccordion().find('.mod_accordion_item').each(($el,index,$list)=>
    {
        if($el.find('h3').text().includes('SwissPass'))
        {
            $el.find('button[class="mod_accordion_item_link"]').click()
        }
    })
})


Cypress.Commands.add('topIsWithinViewport', { prevSubject: true }, subject => {
    const windowInnerWidth = Cypress.config(`viewportWidth`);
  
    const bounding = subject[0].getBoundingClientRect();
  
    const rightBoundOfWindow = windowInnerWidth;
  
    expect(bounding.top).to.be.at.least(0);
    expect(bounding.left).to.be.at.least(0);
    expect(bounding.right).to.be.lessThan(rightBoundOfWindow);
  
    return subject;
  })

  Cypress.Commands.add("checkboxChecked", (checkboxes) => { 
    cy.get('.mod_radio_checkbox_label').each(($el, index, $list) => {
        
        if($el.text().includes(checkboxes))
        {
            $el.click()
        }
    
    
        })
    })

    Cypress.Commands.add("accordionItemOpens", (TravelcardsTickets) => { 
        
        travelcardsTickets.getAccordionItem().each(($el,index,$list)=>
        {
            if($el.prop('class').includes('is_closed'))
            {
                $el.find('button[class="mod_accordion_item_link"]').click()
                
            }
            
        })
    })


    Cypress.Commands.add("accordionItemCloses", (TravelcardsTickets) => { 
        
        travelcardsTickets.getAccordionItem().each(($el,index,$list)=>
        {
            if($el.prop('class').includes('is_open'))
            {
                $el.find('button[class="mod_accordion_item_link"]').click()
                
            }
            
        })
    })


    const campaignPage=new CampaignPage()
    Cypress.Commands.add("backgroundColor", (CampaignPage) => { 
        campaignPage.getFullWidthItem().each(($el,index,$list)=>
      {
        if(index%2===0)
        {
          //expect($el).to.have.class('layout_full_width var_diagonal')
          expect($el).to.have.css('background-color','rgba(0, 0, 0, 0)')
        }
        else
        {
          expect($el).to.have.class('layout_full_width var_diagonal var_dark')
          expect($el).to.have.css('background-color','rgb(246, 246, 246)')
        }
      })
    })
