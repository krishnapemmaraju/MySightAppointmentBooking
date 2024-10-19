import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import BookAppointment from "../../../pages/MySight/BookAppointmentPage";
import * as loginData from "../../../helper/env/apptDetailsCustPwd.json"
import ReArrangeAppt from "../../../pages/MySight/ReArrangeAppointment";
import { pageFixture } from "../../../hooks/pageFixture";
import { expect } from "@playwright/test";
let config = require("../../../helper/env/apptDetails.json");
let appCustDetailsEmail = require("../../../helper/env/apptDetailsCustPwd.json");

setDefaultTimeout(60 * 1000 * 2);
let bookAppt: BookAppointment;
let rearrnAppt: ReArrangeAppt;

When('User login in to online account', async function () {
    rearrnAppt = new ReArrangeAppt(pageFixture.page);
    bookAppt = new BookAppointment(pageFixture.page);
    delete require.cache[require.resolve('../../../helper/env/apptDetailsCustPwd.json')];
    appCustDetailsEmail = require("../../../helper/env/apptDetailsCustPwd.json");
    await rearrnAppt.loginIntoOnlineAccount(`${appCustDetailsEmail.emailID}`, `${appCustDetailsEmail.custPwd}`, this);
});


When('User clicks on Appointments', async function () {
    await rearrnAppt.clickOnAppointmentsInSubMenu();
});


When('User clicks on details under Booked appointments', async function () {
    await rearrnAppt.clickOnDetailUnderBookedAppts(this);
});

When('User click on Rearrnage button to modify appointment', async function () {
    await rearrnAppt.clickOnReArrangeBtn(this);
    await bookAppt.selectDateAndTimesForAppt(this);
    await rearrnAppt.clickOnBookNowForReArrange(this);
});

Then('User should see success message after rearranging {string}', async function (reArrangeSuccessMsg) {
    expect(await rearrnAppt.validateRearrangeConfirmationMessage(this)).toEqual(reArrangeSuccessMsg);
    delete require.cache[require.resolve('../../../helper/env/apptDetails.json')];
    config = require("../../../helper/env/apptDetails.json");
    expect(await rearrnAppt.getRearrangeTimingConfirmation(this)).toContain(`${config.apptBookedTime}`);
});