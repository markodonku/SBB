/// <reference types="Cypress" />

import HomePage from '../../support/PageObject/HomePage'
import '@4tw/cypress-drag-drop'

describe('Testing SwissPass login',function(){

    beforeEach(() => {
        // runs once before each test in the block

        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        cy.visit(Cypress.env('url'))
        
    })
      const homePage=new HomePage()

      it('Touch Timetable',function()
      {
        document.dispatchEvent(new Event('timetable-touch-load-images'));
        cy.wait(4000)
        
        homePage.getTimetable().click()
        cy.get('.mod_timetable_switch_module_wrapper.var_touch').should('be.visible')
        cy.wait(4000)
        //homePage.getAdjustButton().focus().should('be.visible')
        //homePage.getStandardTimetable().should('be.visible')

        //cy.wrap('#main > div:nth-child(1) > div > div > div > div.mod_timetable_switch_module_wrapper.var_touch > div > div.mod_timetable_touch_boxes_wrapper > ul > li:nth-child(1) > div.mod_timetable_touch_box.has_content.has_image.has_title.var_doublewidth.var_doubleheight').should('be.visible')
        //cy.wrap('#main > div:nth-child(1) > div > div > div > div.mod_timetable_switch_module_wrapper.var_touch > div > div.mod_timetable_touch_boxes_wrapper > ul > li:nth-child(1) > div.mod_timetable_touch_box.has_content.has_image.has_title.var_doublewidth.var_doubleheight').click()

        //cy.get("select:first").select("#main > div:nth-child(1) > div > div > div > div.mod_timetable_switch_module_wrapper.var_touch > div > div.mod_timetable_touch_boxes_wrapper > ul > li:nth-child(1) > div.mod_timetable_touch_box.has_content.has_image.has_title.var_doublewidth.var_doubleheight", {force: true})
var startPoint= "#main > div:nth-child(1) > div > div > div > div.mod_timetable_switch_module_wrapper.var_touch > div > div.mod_timetable_touch_boxes_wrapper > ul > li:nth-child(1) > div.mod_timetable_touch_box.has_content.has_image.has_title.var_doublewidth.var_doubleheight"
var endPoint= "#main > div:nth-child(1) > div > div > div > div.mod_timetable_switch_module_wrapper.var_touch > div > div.mod_timetable_touch_boxes_wrapper > ul > li:nth-child(2) > div.mod_timetable_touch_box.has_content.has_image.has_title.var_left2.var_doublewidth"
        /*cy.get(startPoint).contains('Zürich HB').should('be.visible', {force: true})
        cy.get(endPoint).contains('Bern').should('be.visible', {force: true})
        cy.get(startPoint).contains('Zürich HB').drag(endPoint, {force: true})*/

        cy.get('.mod_timetable_touch_boxes > li:nth-child(1) > div:nth-child(1) > .mod_timetable_touch_box_image_wrapper', {force: true}).dragTo('.mod_timetable_touch_boxes > li:nth-child(3) > div:nth-child(1) > .mod_timetable_touch_box_image_wrapper', {force: true})

        /*cy.get(startPoint, {force: true}).contains('Zürich HB').trigger('mousedown', {which: 1})
        cy.get(endPoint, {force: true}).contains('Bern').trigger('mousemove').trigger('mouseup')*/
    
       
      })
    

})