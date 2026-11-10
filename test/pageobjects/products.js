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
}

export default new Products();
