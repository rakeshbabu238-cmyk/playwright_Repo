
import {test,expect} from '@playwright/test';


test('doubleclick test', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

const doubleclickBtn = page.getByText("Copy Text");

await doubleclickBtn.dblclick();
await expect(page.locator('#field2')).toHaveValue('Hello World!');
});

test('rightclick test', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    const rightclickBtn = page.getByText("right click me");

    await rightclickBtn.click({ button: 'right' });
    await page.getByText('Edit').click();
    await page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
      });
          
    }
);
