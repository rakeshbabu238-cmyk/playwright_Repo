
import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboardPage';
import { LoginPage } from '../pages/loginPage';

let url = 'https://rahulshettyacademy.com/client/#/auth/login';
let username = 'rakeshbabu123@gmail.com';
let password = 'Automation2020@';
let invalidPassword = 'Automation';

let productName = 'IPHONE 13 PRO';
let loginPage: LoginPage;
let dashboardPage: DashboardPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.launchUrl(url);
});

test('Dashboard Page Tests', async() => {
    dashboardPage = new DashboardPage( loginPage['testPage']);

    await loginPage.validLogin(username, password);
    await expect(loginPage.homePageIdentifier).toBeVisible();

    await dashboardPage.addToCart(productName);
    await dashboardPage.goToCartPage();



});

    

