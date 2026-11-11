import { $ } from "@wdio/globals"
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Login extends Page {
    /**
     * define selectors using getter methods
     */
    get usernameInput() {
        return $("#user-name");
    }

    get passwordInput() {
        return $("#password");
    }

    get loginButton() {
        return $("#login-button");
    }

    get error() {
        return $("h3[data-test='error']");
    }

    credentials = {
        users: [
            "standard_user",
            "locked_out_user",
            "problem_user",
            "performance_glitch_user",
            "error_user",
            "visual_user",
        ],
        password: "secret_sauce",
    };

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open("");
    }
}

export default new Login();
