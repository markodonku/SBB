class TravelcardsTickets
{
getKeyvisual()
{
    return cy.get('.mod_key_visual')
}

getTooltip()
{
    return cy.get(':nth-child(3) > p > .mod_tooltip > .mod_tooltip_footnote_button')
}

getFootnote()
{
    return cy.get('#footnote1')
}

getCloseButton()
{
    return cy.get('#footnote1_window > .mod_tooltip_window_close_button')
}

getSecondAccordion()
{
    return cy.get('.layout_columns > :nth-child(2) > :nth-child(6)')
}

getNBCItem()
{
    return cy.get('.box.section')
}

getAccordion()
{
    return cy.get(':nth-child(9) > .mod_accordion > :nth-child(1) > .mod_accordion_item_heading > .mod_accordion_item_title > .mod_accordion_item_link')
}
}
export default TravelcardsTickets;