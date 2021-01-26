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
}
export default BahnhofServicesPage;