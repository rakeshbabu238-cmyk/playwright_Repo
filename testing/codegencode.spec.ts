import { test, expect } from '@playwright/test';
import { waitForDebugger } from 'inspector';

test('test', async ({ page }) => {
    await page.pause();
  await page.goto('https://testautomationpractice.blogspot.com/');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Popup Windows' }).click();
  const page1 = await page2Promise;
  await expect(page1.getByRole('main')).toContainText('Test Mobile Web. Native mobile emulation of Google Chrome for Android and Mobile Safari. The same rendering engine works on your Desktop and in the Cloud.');
  await page1.locator('[id="__docusaurus_skipToContent_fallback"]').click();
  await expect(page1.getByRole('main')).toBeVisible();
});