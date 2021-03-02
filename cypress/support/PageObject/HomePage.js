class HomePage
{

getSBBLogo()
{
    return cy.get('.mod_header_logo_content')
}

getMainTeaserTitle()
{
    return cy.get('.mod_homepage_main_teaser_item_content_title')
}

getMainTeaser()
{
    return cy.get('.mod_homepage_main_teaser_item')
}

getLeisureFinder()
{
    return cy.get('.mod_lh_teaser_homepage_container')
}

getHeaderIcons()
{
    return cy.get('.mod_metanav_listitem')
}

getOverlay()
{
    return cy.get('.mod_lightbox.var_login.is_content_loaded.is_visible.is_open.is_animation_ended')
}

getFooterClock()
{
    return cy.get('.mod_clock_container_open_button')
}

getSwissLogo()
{
    return cy.get('.mod_footer_bottomcontainer_logo')
}

getHeaderMenu()
{
    return cy.get('.mod_megadropdown_togglemenu')
}

getHeader()
{
    return cy.get('.mod_header.is_rolledup')
}

getLeisureHoliday()
{
    return cy.get('#ui-id-115')
}

getBadge()
{
    return cy.get('.mod_lh_badge_megadropdown')
}

getLoginButton()
{
    return cy.get('[data-metanav="profile"] > .mod_metanav_linkitem')
}

getTimetable()
{
    return cy.get('.mod_timetable_switch_button.var_touch')
}

getAdjustButton()
{
    return cy.get('.mod_timetable_touch_accessory_button.var_start')
}

getStandardTimetable()
{
    return cy.get('.mod_timetable_switch_button.var_default')
}
}

export default HomePage;