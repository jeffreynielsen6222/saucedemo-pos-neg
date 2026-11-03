import { expect } from "@wdio/globals"
import Login from "../pageobjects/login.js"
import Products from "../pageobjects/products.js"

describe("My Login application", () => {
    it("should login with valid credentials", async () => {
        const users = Login.credentials.users;
        for (let i = 0; i < users.length; i++) {
            const username = users[i];
            await Login.open();
            await Login.login(username, Login.credentials.password);
            await expect(Products.title).toBeExisting();
            await expect(Products.title).toHaveText(
                expect.stringContaining("Products")
            );
        }
    });
});