const {By, Key, Builder, Browser} = require("selenium-webdriver");
require("chromedriver");
var should = require('chai').should()


describe("Getting Store Front Menu......", function () {
    let driver;
    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
    });
    // afterEach(async function () {
    //     await driver.quit();
    // });
    it("Getting Store menu", async function () {

        //To fetch http://google.com from the browser with our code.
        await driver.get("https://www.cart.com/storefront/online-store");

        var title = await driver.findElement(By.className("offering--hero__heading"));
        title.getText().then(function (text) {
            text.should.equal(title);
        });
        await driver.findElement(By.xpath("//*[@id=\"w-dropdown-toggle-8\"]")).click();
        driver.quit();
    });
});


