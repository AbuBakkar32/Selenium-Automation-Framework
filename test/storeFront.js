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
    it("Getting Store Front", async function () {

        //To fetch http://google.com from the browser with our code.
        await driver.get("https://www.cart.com/");

        const actions = driver.actions({bridge: true});
        var elem = await driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[1]/div/div[1]"));
        await actions.move({duration: 2000, origin: elem, x: 0, y: 0}).perform();
        await driver.sleep(1000);
        await driver.findElement(By.linkText("Storefront Analytics")).click();
        await driver.findElement(By.className("offering--hero__heading")).getText().then(function (text) {
            if(text=="How powerful is your online store?"){
                driver.quit();
            }
            else{
                console.log("Store Front Menu is not working");
            }
        });
    });
});


