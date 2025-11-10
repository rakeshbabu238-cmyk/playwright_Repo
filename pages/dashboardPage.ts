import { Locator , Page } from 'playwright';

export class DashboardPage {

    //Properties
    private testPage: Page;
    public dashboardIdentifier: Locator;
    private priceDetails: Locator;
    private addToCartButton: Locator;
    private cartItems: Locator;
    private ProductName: Locator;


    constructor(page: Page) {

        this.testPage = page;
        this.ProductName = this.testPage.locator('.card-body h5');
        this.dashboardIdentifier= this.testPage.locator('.fa-sign-out')
        this.priceDetails = this.testPage.locator('.text-muted');
        this.addToCartButton = this.testPage.locator('.fa-shopping-cart');
        this.cartItems = this.testPage.locator('[routerlink="/dashboard/cart"]');
    }

    //Methods
    // Add to Cart
    async addToCart(expectedProductName: string) {
        await this.dashboardIdentifier.waitFor();

        const productsCount = await this.ProductName.count();
        for (let i = 0; i < productsCount; i++) {
            const productName = await this.ProductName.nth(i).textContent();
            if (productName === expectedProductName) {
                await this.addToCartButton.nth(i).click();
                break;
            }
            console.log(productName);
        }  
        console.log(`Added ${expectedProductName} to the cart`);
    
    }

    async goToCartPage() {
    
    await this.cartItems.click();
    await this.testPage.waitForLoadState('networkidle');
    await this.testPage.locator('text=My Cart').waitFor();
    console.log('Navigated to Cart Page');

    /*

    await this.testPage.getByRole('button', { name: 'Checkout' }).waitFor();
    await this.testPage.getByRole('button', { name: 'Checkout' }).click();
    await this.testPage.getByText('Checkout').isVisible();
    console.log('Navigated to Cart Page');
    */


    }

    async checkoutProcess() {

    await this.testPage.getByRole('button', { name: 'Checkout' }).waitFor();
    await this.testPage.getByRole('button', { name: 'Checkout' }).click();
    console.log('Navigated to Payment Page');
    
    await page.getByRole('button', { name: 'India' }).click();

    }


}
