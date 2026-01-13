class CheckoutPage{
    constructor(page){
        this.page=page;
        this.firstName=page.locator('#first-name');
        this.lastName=page.locator('#last-name');
        this.zip=page.locator('#postal-code');
        this.continueBtn=page.loactor('#continue');
        
        this.successMsg=page.locator('//span[text()="Checkout: Complete!"]');
        
    }

    async enterDetails(first,last,zip){
        await this.page.fill(this.firstName,first);
        await this.page.fill(this.lastName, last);
        await this.page.fill(this.zip, zip);
    }
}