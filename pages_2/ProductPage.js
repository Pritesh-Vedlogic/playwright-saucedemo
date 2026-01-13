class ProductPage{

    constructor(page){

        this.page=page;

        this.productNames=page.locator('.inventory_item_name');//list of products
        this.shoppingCartButton=page.locator('#shopping_cart_link');//cart button
        this.clickOnAddToCart=page.locator('#add-to-cart-sauce-labs-backpack');//Add to cart
        this.inventoryItemPrice=page.locator('.inventory_item_price')
        this.menuClick=page.locator('#react-burger-menu-btn');//3 line menu item
        this.clickOnLogout=page.locator('#logout_sidebar_link');//logout from menu
    }

    async addProductToCar(){
        await this.clickOnAddToCart.click();
    }

    async goToCart(){
        await this.shoppingCartButton.click();
    }

    async listDownProducts(){
        const productNames=await this.productNames.allTextContents();
        console.log('Total Products:',productNames.length);

        for(let i=0;i<productNames.length;i++){
            console.log(`${i+1}.${productNames[i]}`);
        }
    }
}

module.exports={ProductPage};