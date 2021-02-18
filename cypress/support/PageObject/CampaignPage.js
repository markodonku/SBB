class CampaignPage
{
getLargeKeyVisual()
{
    return cy.get('.mod_cp_mainteaser')
}

getArrowButton()
{
    return cy.get('.mod_cp_mainteaser_button')
}

getPagination()
{
    return cy.get('.mod_cp_scroll_pager')
}

getFullWidthItem()
{
    return cy.get('.layout_full_width')
}
}
export default CampaignPage;