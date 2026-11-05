import { expect } from "@wdio/globals"
import Login from "../pageobjects/login.js"
import Products from "../pageobjects/products.js"

describe("My Login application", () => {
    it("should login with valid credentials", async () => {
        for (const username of Login.credentials.users) {
            await Login.open();
            await Login.login(username, Login.credentials.password);
            await expect(Products.title).toBeExisting();
            await expect(Products.title).toHaveText("Products");
        }

        const itemName = "Sauce Labs Bolt T-Shirt";
        await Products.addToCart(itemName);
        const itemButton = await Products.getItemButton(itemName);
        await expect(itemButton).toHaveText("Remove");
    });
});