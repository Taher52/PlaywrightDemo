import {test,expect} from "@playwright/test"

test('locators', async ({page})=>{

    await page.goto('https://demoblaze.com/index.html');

    // click on login link

    // page.locator('id="login2"').click();   //multiple ways
    await page.click('id=login2');

    // enter username
    // await page.locator('id="loginusername"').fill('pavanol'); //multiple ways
    await page.fill('id=loginusername','pavanol');
    // await page.type('id="loginusername"','pavanol'); //multiple ways

    // enter password
    await page.fill('id=loginpassword','test@123');

    // click on login button
    await page.click("//button[normalize-space()='Log in']");


    // verify logout link
    const logoutLInk = await page.locator("//a[@id='logout2']");

    await expect(logoutLInk).toBeVisible();

})

