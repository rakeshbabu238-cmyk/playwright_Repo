import {test,expect} from '@playwright/test';

// Run tests with a visible browser and a small slowMo so you can watch actions
test.use({ headless: false, launchOptions: { slowMo: 100 } });

test.describe('Login Page', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
  });

  test('should display login form', async ({page}) => {
    // NOTE: removed `page.pause()` which will pause tests and cause automated runs to hang or timeout.
    await expect(page.getByLabel('Username')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('button', {name: 'Submit'})).toBeVisible();

    //await page.getByLabel('Username').fill('student');
   // await page.locator('[name="username"]').fill('student');
    //await page.getByLabel('Password').fill('Password123');
    //await page.getByRole('button', {name: 'Submit'}).click();

     // Using ID locator
    await page.locator('#username').fill('student');
    // Using Name locator
    await page.locator('[name="password"]').fill('Password123');
    // Using CSS Selector
    await page.locator('.btn').click();

    
    await expect(page.getByRole('heading', {name: 'Logged In Successfully'})).toBeVisible();
});
 });

 
 