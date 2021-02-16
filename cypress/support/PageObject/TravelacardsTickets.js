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

getNameInput()
{
    return cy.get('#sbb4c4ef9')
}

getSurnameInput()
{
    return cy.get('#sbb6f47de')
}

getStreetInput()
{
    return cy.get('#sbbf7c104')
}

getPLZ()
{
    return cy.get('#sbbe672e7')
}

getPlace()
{
    return cy.get('#sbb2da10a')
}

getEmailInput()
{
    return cy.get('#sbb28161e')
}

getTelephoneInput()
{
    return cy.get('#sbbb0d608')
}

getBestellnummer()
{
    return cy.get('#sbb9fa3e0')
}

getMessageInput()
{
    return cy.get('#sbb734755')
}

getSubmit()
{
    return cy.get('.text__primarybutton.button')
}

getAccordionItem()
{
    return cy.get('.mod_accordion_item')
}

getPaymentList()
{
    return cy.get('.mod_payment_options_list')
}

getPromoCodeText()
{
    return cy.get('#promo_code_value_label')
}

getPromoCodeInput()
{
    return cy.get('#promo_code_value')
}

getPromoCodeSubmit()
{
    return cy.get('.button.text__secondarybutton')
}

getPopularTopics()
{
    return cy.get('.mod_popular_topics')
}

getManualTeaserItems()
{
    return cy.get('.mod_lh_teaser_homepage_teasers_list_item')
}

getCampaignTeaser()
{
    return cy.get('.mod_cp_campaign_teaser')
}

getGeneralSupplyTeaser()
{
    return cy.get('.mod_general_supply_teasers')
}

getGeneralSupplyItems()
{
    return cy.get('.mod_general_supply_teasers_list_item')
}

getSocialStream()
{
    return cy.get('.mod_socialstream ')
}

getLogoBarItems()
{
    return cy.get('.mod_sponsor_bar_list_item')
}

getOfferModule()
{
    return cy.get('.mod_cp_product_comparison_list_item')
}
}
export default TravelcardsTickets;