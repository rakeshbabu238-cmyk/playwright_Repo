import {test,expect} from '@playwright/test';

test('dialog test', async ({ page }) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`)
        await expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
      });
    
    await page.getByText('Simple Alert').click();

});

test('confirm alert', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
      });

    await page.getByText('Confirmation Alert').click();
    await expect(page.locator('#demo')).toHaveText('You pressed OK!');
});

test('popup window', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // Wait for popup to open
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('button', { name: 'Popup Windows' }).click()
    ]);

    // Wait for popup page to load
    await popup.waitForLoadState('domcontentloaded');
    
    // Verify content in popup window
    await expect(popup.getByRole('main')).toContainText('Test Mobile Web');
});