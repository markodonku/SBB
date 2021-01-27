class BahnhofServicesPage
{
    getInputField()
    {
        return cy.get('#search')
    }

    getMapButton()
    {
        return cy.get('#tab2')
    }

    getBahnhofTitle()
    {
        return cy.get('.mod_pagetitle')
    }

    getMap()
    {
        return cy.get('.mod_map')
    }

    getMarkers()
    {
        return cy.get('.leaflet-marker-icon')
    }

    getShopBadge()
    {
        return cy.get('.mod_openshops_badge')
    }

    getAllShops()
    {
        return cy.get('#panel-1')
    }

    getOpenShops()
    {
        return cy.get('#panel-2')
    }

    getTabAllShops()
    {
        return cy.get('#tab-0')
    }

    getTabOpenShops()
    {
        return cy.get('#tab-1')
    }

    getFilterInput()
    {
        return cy.get('#tag_input')
    }
}
export default BahnhofServicesPage;