Feature: ReArrange appointment 

@mysight
    Scenario Outline: Rearrnage appointment already booked
        Given User navigated to choose a store page
        When  User login in to online account
        And User clicks on Appointments
        And User clicks on details under Booked appointments
        And User click on Rearrnage button to modify appointment
        Then User should see success message after rearranging "Your appointment has been rearranged"