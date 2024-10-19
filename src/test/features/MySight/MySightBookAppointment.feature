Feature: Validate store checks in MySight application

    @mysight
    Scenario Outline: Validate Address for the Hull Branch
        Given User navigated to choose a store page
        When  User selects store as "<store>" from choose a store dropdown
        Then  User should see the address for "<store>" as "<storeAddress>"
        And validate opening hours for "<store>" on "<Storeday>" should match "<openingHours>"
        When User click on Book Online to book appointments
        Then User should not able to see appointments available

        Examples:
            | store | storeAddress                   | Storeday  | openingHours    |
            | Hull  | 6 Humber Street, HULL, HU1 1TG | Wednesday | 9:00am - 6:15pm |

   
