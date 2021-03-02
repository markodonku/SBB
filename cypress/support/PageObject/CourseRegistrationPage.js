class CourseRegistrationPage
{
    getCourseAccordion()
    {
        return cy.get('.mod_accordion_item_link')
    }

    getCourseLocation()
    {
        return cy.get('.mod_course_booking_location')
    }

    getBookingDay()
    {
        return cy.get('.mod_course_booking_date')
    }

    getDuration()
    {
        return cy.get('.mod_course_booking_duration')
    }

    getCourseLanguage()
    {
        return cy.get('.mod_course_booking_language')
    }

    getCourseAvailability()
    {
        return cy.get('.mod_course_booking_availability')
    }

    getRegistrationButton()
    {
        return cy.get('.mod_course_booking_cta')
    }

}
export default CourseRegistrationPage;