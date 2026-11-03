import { expect } from "@wdio/globals"
import Login from "../pageobjects/login.js"
import Products from "../pageobjects/products.js"

describe("My Login application", () => {
    it("should login with valid credentials", async () => {
        await Login.open();
        await Login.login(Login.username, Login.password);
        await expect(Products.title).toBeExisting();
        await expect(Products.title).toHaveText(
            expect.stringContaining("Products")
        );
    });
});