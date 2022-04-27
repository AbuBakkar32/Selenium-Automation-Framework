const {By, Key, Builder, Browser, until} = require("selenium-webdriver");
require("chromedriver");
var should = require('chai').should()

describe("Getting Store Front Analysis Menu......", function () {
    let driver;
    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
    });
    afterEach(async function () {
        await driver.quit();
    });
    it("Getting Store Front Analysis", async function () {

        //To fetch http://google.com from the browser with our code.
        await driver.get("https://www.cart.com/");

        const actions = driver.actions({bridge: true});
        var elem = await driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[1]/div/div[1]"));
        await actions.move({duration: 2000, origin: elem, x: 0, y: 0}).perform();
        await driver.sleep(1000);
        await driver.findElement(By.xpath("//*[@id=\"w-dropdown-list-0\"]/a[2]")).click();
        await driver.wait(until.elementLocated(By.xpath("/html/body/main/section[2]/div/div/h2")), 10000);
        await driver.findElement(By.xpath("/html/body/main/section[2]/div/div/h2")).getText().then(function (text) {
            if(text=="Holistic ecommerce storefront analytics"){
                driver.quit();
            }
            else{
                console.log("Store Front Menu is not working");
            }
        });
    });
});


