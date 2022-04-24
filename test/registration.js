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

        var title = await driver.findElement(By.className("h3"))
        title.getTitle().then(function (t) {
            t.should.equal("Welcome to Cart.com");
        });

        if (title.getTitle() === "Welcome to Cart.com") {
            driver.quit();
        } else {
            console.log("Title is incorrect");
        }

    });
});


