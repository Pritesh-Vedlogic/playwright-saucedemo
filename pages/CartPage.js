class CartPage{

    constructor(page) {

        this.page=page;

        this.checkoutButton=page.locator('#checkout');
        this.continueShopping=page.locator('#continue-shopping');
    }

    async checkout(){
        await this.page.click(this.checkoutButton);
    }

    async continueShop(){
        await this.page.click(this.continueShopping);
    }

}

module.exports={CartPage};