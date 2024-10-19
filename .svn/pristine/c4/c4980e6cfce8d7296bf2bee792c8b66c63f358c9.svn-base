Feature: Book An Appointment in MySight application

 @mysight
    Scenario Outline: Book an Appointment at MagoosBeta Options
        Given User navigated to choose a store page
        When  User selects store "<OpticianStore>" and click on Book Online
        And User selects the appointment type as "<AppointmentType>"
        And User selects available date and time slots
        And User clicks on Book Now to proceed with the appointment
        And User enter valid details to finish the appointment
        Then User should see success message "Your appointment has been booked"

        Examples:
            | OpticianStore        | AppointmentType  |
            | MagoosBeta Opticians | Contact Lens Fit |