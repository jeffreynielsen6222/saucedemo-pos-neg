import { $ } from "@wdio/globals"
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Products extends Page {
    /**
     * define selectors using getter methods
     */
    get title() {
        return $(".title");
    }

    get items() {
        return $$("div[data-test='inventory-item']");
    }

    async getItem(itemName) {
        for await (const item of this.items) {
            const name = await item.$("div[data-test='inventory-item-name']").getText();
            if (name === itemName) return item;
        }
    }

    async getItemButton(itemName) {
        const item = await this.getItem(itemName);
        return await item.$("button");
    }

    async addToCart(itemName) {
        const button = await this.getItemButton(itemName);
        if (await button.getText() === "Add to cart") await button.click();
    }
}

export default new Products();