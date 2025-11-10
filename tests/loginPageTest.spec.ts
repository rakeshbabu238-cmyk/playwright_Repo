
import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

//Test for login page

let url = 'https://rahulshettyacademy.com/client/#/auth/login';
let username = 'rakeshbabu123@gmail.com';
let password = 'Automation2020@';
let invalidPassword = 'Automation';
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.launchUrl(url);
});

test('Valid Login Page Test', async () => {
    await loginPage.validLogin(username, password);
    await expect(loginPage.homePageIdentifier).toBeVisible();
});