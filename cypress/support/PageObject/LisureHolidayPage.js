class LeisureHolidayPage
{
    getGradientImage()
    {
        return cy.get('.mod_lh_finder_header_gradient')
    }

    getTitle()
    {
        return cy.get('.mod_pagetitle.var_lh')
    }

    getLead()
    {
        return cy.get('.mod_lead_text')
    }

    getLeisureFinder()
    {
        return cy.get('.mod_lh_finder')
    }

    getTeaserSet()
    {
        return cy.get('.mod_lh_teaser_homepage')
    }

    getLeisureItem()
    {
        return cy.get('.mod_lh_teaser_homepage_teasers_list_item')
    }

    getLinkList()
    {
        return cy.get('.mod_link_overview')
    }

    getListItems()
    {
        return cy.get('.mod_link_overview_list')
    }

    getRegionSearchField()
    {
        return cy.get('.mod_textfield_container')
    }

    getSearchButton()
    {
        return cy.get('.text__primarybutton')
    }

    getSearchResults()
    {
        return cy.get('.mod_lh_offerlist_lv_list')
    }

    getOfferItem()
    {
        return cy.get('.mod_lh_offerlist_lv_list_item')
    }

    getShowMoreButton()
    {
        return cy.get('a[class="text__ghostbutton"]')
    }

    getOffer()
    {
        return cy.get('.mod_lh_offerlist_lv_list > li:nth-child(1) > a')
    }

    getBottomTeaser()
    {
        return cy.get('.layout_center > .mod_moduleloader')
    }
}

export default LeisureHolidayPage