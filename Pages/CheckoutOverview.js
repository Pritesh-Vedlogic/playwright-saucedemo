class CheckoutOverview{

    constructor(page){
        this.page=page;

        this.finishBtn=page.loactor('#finish');
        this.cancel=page.locator('#cancel');

    }

    async clickFinish(){
        await this.page.click(this.finishBtn);
    }

    async clickCancel(){
        await this.page.click(this.cancel);
    }

}