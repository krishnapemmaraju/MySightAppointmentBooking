
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { expect } from "@playwright/test";
import BookAppointment from "../../../pages/MySight/BookAppointmentPage";
import ChooseAStore from "../../../pages/MySight/ChooseAStorePage";
import * as custData from "../../../helper/temp/userData.json";
import * as appData from "../../../helper/env/apptDetails.json";
import JSONUtils from "../../../helper/utils/JSONUtils";


setDefaultTimeout(60 * 1000 * 2);
let bookAppt: BookAppointment;

When('User selects store {string} and click on Book Online', async function (opticianStore) {
      bookAppt = new BookAppointment(pageFixture.page);
      await bookAppt.bookAppointment(opticianStore,this);

  });



When('User selects the appointment type as {string}', async function (apptType) {
     await bookAppt.selectAppointment(apptType,this);
});



When('User selects available date and time slots', async function () {
    await bookAppt.selectDateAndTimesForAppt(this);
});



When('User clicks on Book Now to proceed with the appointment', async function () {
    await bookAppt.clickOnBookNow(this);     
});


When('User enter valid details to finish the appointment', async function () {
     await bookAppt.fillValidDetailsForAppointment(custData.CustomerInfo[0].emailAddress,custData.CustomerInfo[0].title,
        custData.CustomerInfo[0].firstName,custData.CustomerInfo[0].lastName,custData.CustomerInfo[0].dob,custData.CustomerInfo[0].postCode,
        custData.CustomerInfo[0].phoneNumber);
});


Then('User should see success message {string}', async function (bookingSuccessMessage) {
      expect(await bookAppt.validateAppointmentConfirmationMessage(this)).toEqual(bookingSuccessMessage);
      expect(await bookAppt.validateAppointmentTimingMessage(this)).toBeTruthy();
});