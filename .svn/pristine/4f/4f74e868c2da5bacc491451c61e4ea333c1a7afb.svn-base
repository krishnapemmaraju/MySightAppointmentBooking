Feature: Update Account details

    @mysight
    Scenario Outline: Update Account details
        Given User navigated to choose a store page
        When  User login in to online account
        And User click on Edit icon to update Account details
        And User updates firstName,LastName and Mobile Number and address as "<updateAddress>"
        Then User should see updated values

        Examples:
            | updateAddress |
            | HG4 1SF       |
