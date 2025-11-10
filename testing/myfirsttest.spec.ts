import {test,expect} from '@playwright/test';

test('buy item test', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.getByPlaceholder('email@example.com').fill('rakeshbabu123@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Automation2020@');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(3000);


    const searchInput = page.getByPlaceholder('search');
    await searchInput.waitFor({ state: 'visible' });    
    await searchInput.fill('ZARA COAT 3');

    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Add To Cart' , exact: true}).click();
    await page.waitForTimeout(2000);
    await page.locator('[routerlink="/dashboard/cart"]').click();
    await page.waitForTimeout(2000);
    await expect(page.locator('h3:has-text("ZARA COAT 3")')).toBeVisible();
    
    await page.getByRole('button',{name : 'Checkout'}).click();
    await expect(page.locator('.btnn.action__submit.ng-star-inserted')).toBeVisible();
});