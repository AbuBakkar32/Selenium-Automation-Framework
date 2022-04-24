const {By, Key, Builder, Browser} = require("selenium-webdriver");
require("chromedriver");
var should = require('chai').should()


describe("Getting Store Front Menu......", function () {
    let driver;
    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
    });
    afterEach(async function () {
        await driver.quit();
    });
    it("should work", async function () {

        //To fetch http://google.com from the browser with our code.
        await driver.get("https://www.cart.com/");

        driver.getTitle().then(function (title) {
            title.should.equal("The end-to-end ecommerce platform | Cart.com", "Title is correct");
        });

        if (driver.getTitle() === "The end-to-end ecommerce platform | Cart.com") {
            driver.quit();
        } else {
            console.log("Title is incorrect");
        }

    });
});


