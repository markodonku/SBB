class SearchPage
{
    getSearchInput()
    {
        return cy.get('#search')
    }

    getSubmit()
    {
        return cy.get('.layout_columns_main > .mod_search > .mod_search_form > .mod_search_button')
    }

    getTabs()
    {
        return cy.get('.mod_tabs_tablistitem')
    }
}
export default SearchPage;