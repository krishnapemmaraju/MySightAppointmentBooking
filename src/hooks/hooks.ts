import { BeforeAll, Before, After, AfterAll, AfterStep } from "@cucumber/cucumber";
import { Page, Browser, chromium, BrowserContext } from "@playwright/test"
import { pageFixture } from "./pageFixture";
import * as data from "../helper/env/envDetails.json"

let browser: Browser;
let page: Page;
let context: BrowserContext;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false, slowMo: 2000 ,channel:'chrome'});
  context = await browser.newContext();
  await context.clearCookies();
});

Before({ tags: "@mysight" }, async function () {
  context = await browser.newContext();
  page = await browser.newPage();
  pageFixture.page = page;
  await pageFixture.page.goto(data.mySight[0].url);
});

After({ tags: "@mysight" }, async function () {
  await page.close();
});

AfterAll({}, async function () {
  await context.close();
  await browser.close();
});



