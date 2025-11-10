import {test,expect} from '@playwright/test';

test('dropdown test', async ({ page }) => {

await page.goto('https://demoqa.com/select-menu');

const dropdown = page.locator('#oldSelectMenu');
await dropdown.waitFor({ state: 'visible' });

await dropdown.selectOption({ label: "Blue"});

await expect(dropdown).toHaveValue("1");

});
