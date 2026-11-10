import { expect } from "@wdio/globals"
import Login from "../pageobjects/login.js"
import Products from "../pageobjects/products.js"

describe("SauceDemo Login", () => {
    it("should log in with valid credentials", async () => {
        for (const username of Login.credentials.users) {
            await Login.open();
            await Login.login(username, Login.credentials.password);
            await expect(Products.title).toBeExisting();
            await expect(Products.title).toHaveText("Products");
        }
    });

    it("should give an error with invalid credentials", async () => {
        const validUsers = Login.credentials.users.map(
            (username) => ({
                username: username,
                password: "invalid_password",
            })
        );
        const invalidUser = {
            username: "invalid_user",
            password: Login.credentials.password,
        };
        const testCredentials = validUsers.concat([invalidUser]);

        for (const credentials of testCredentials) {
            await Login.open();
            await Login.login(credentials.username, credentials.password);
            await expect(Login.error).toBeDisplayed();
        }
    });
});
