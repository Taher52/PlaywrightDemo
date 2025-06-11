const {test, expect} = require('@playwright/test');

test('Homepage', async ({page})=>{

    await page.goto("https://demoblaze.com/index.html");

    const pageTitle = page.title();

    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();

    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    
    await page.close;
}
)