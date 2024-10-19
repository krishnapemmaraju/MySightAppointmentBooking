
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { expect } from "@playwright/test";
import ChooseAStore from "../../../pages/MySight/ChooseAStorePage";


setDefaultTimeout(60 * 1000 * 2);
let chooseAstore: ChooseAStore;
Given('User navigated to choose a store page', async function () {
    chooseAstore = new ChooseAStore(pageFixture.page);
    expect(await chooseAstore.isChooseAStorePageLaunched(this)).toBeTruthy();
});


When('User selects store as {string} from choose a store dropdown', async function (storeID) {
    await chooseAstore.searchStoreAndSelect(storeID, this);
});



Then('User should see the address for {string} as {string}', async function (storeID, storeAddress) {
    let getStoreAddr = await chooseAstore.getChosenStoreAddressDetails(storeID, this);
    expect(getStoreAddr).toEqual(storeAddress);
});

Then('validate opening hours for {string} on {string} should match {string}', async function (storeID, storeDay, storeOpeningHrs) {
    let getStoreOpeningHrs = await chooseAstore.getChosenStoreOpeningTimings(storeID, storeDay, this);
    expect(getStoreOpeningHrs).toEqual(storeOpeningHrs);

});

When('User click on Book Online to book appointments', async function () {
     await chooseAstore.clickOnBookAppointments(this);
});

Then('User should not able to see appointments available', async function () {
     expect(await chooseAstore.isSelectDateAndTimesDisabled()).toBeTruthy();
});
