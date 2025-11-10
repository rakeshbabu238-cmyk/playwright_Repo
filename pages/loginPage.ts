import { Locator, Page } from 'playwright';

export class LoginPage {

    //Properties
    private testPage: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;
    public homePageIdentifier: Locator;

    constructor(page: Page) {
        this.testPage = page;
        this.usernameInput = this.testPage.getByPlaceholder('email@example.com');
        this.passwordInput = this.testPage.getByPlaceholder('enter your passsword');
        this.loginButton = this.testPage.locator('#login');
        this.errorMessage = this.testPage.locator('#toast-container');
        this.homePageIdentifier = this.testPage.locator('.fa-sign-out');

    }

    //Methods
    //Launch the url

    async launchUrl(url: string) {
       await this.testPage.goto(url);
    }

    async validLogin(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async inValidLogin(username: string, invalidPassword: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(invalidPassword);
        await this.loginButton.click();
    }
}

