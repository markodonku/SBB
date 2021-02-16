class CompanyPage
{

getSliderTitle()
{
    return cy.get('.mod_homepage_main_teaser_item_content_title')
}

getFilter()
{
    return cy.get('.mod_accordion_item')
}

getYear()
{
    return cy.get('.mod_datepicker_picker_header_year_current')
}

getInputFieldFrom()
{
    return cy.get('#filter_date_from')
}

getInputFieldTo()
{
    return cy.get('#filter_date_to')
}

getInputField()
{
    return cy.get('#tag_input')
}
getDropdown()
{
    return cy.get('#filter_topic')
}

getResultList()
{
    return cy.get('.mod_searchresults_pressrelease')
}

getResetButton()
{
    return cy.get('.mod_group')
}

getFilterButton()
{
    return cy.get('.mod_accordion_item_link')
}

}

export default CompanyPage;