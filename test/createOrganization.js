const {By, Key, Builder, Browser, until} = require("selenium-webdriver");
require("chromedriver");
var should = require('chai').should()
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

describe("Create Organization......", function () {
    let driver;
    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
    });
    afterEach(async function () {
        await driver.quit();
    });
    it("Creating Organization.......", async function () {

        //To wait for browser to build and launch properly
        let driver = await new Builder().forBrowser("chrome").build();

        //To fetch http://google.com from the browser with our code.
        await driver.get("https://www.cart.com/");

        await driver.findElement(By.linkText("Sign in")).click();

        await driver.wait(until.elementLocated(By.className("h3")), 10000);

        await driver.findElement(By.id("login-email")).sendKeys("abubakkar.swe@gmail.com");
        await sleep(1000);
        await driver.findElement(By.id("login-password")).sendKeys("AbuBakkar@32");
        await sleep(2000);
        await driver.findElement(By.xpath("/html/body/section/div/div[2]/figure/div[2]/div[1]/form/div[5]/button")).click();
        await sleep(4000);

        await driver.wait(until.elementLocated(By.xpath("/html/body/div[2]/main/div/div/p")), 10000);
        await driver.findElement(By.xpath("/html/body/div[2]/main/div/div/button")).click();
        await driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/div/div/div/div/h1")), 10000);

        await driver.findElement(By.id("organization-name")).sendKeys("ASL");
        await driver.findElement(By.id("organization-url")).sendKeys("https://www.automationservicesbd.com/");
        await driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/div/div/div/div/form/div[3]/div[2]/button")).click();
        await driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/div/div/div/div/form/div[3]/div[3]/ul/div[3]/li/span")).click();
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
        await driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/div/div/div/div/form/div[4]/div[2]/button")).click();
        await driver.findElement(By.xpath("/html/body/div[2]/div[2]/div[2]/div/div/div/div/form/div[4]/div[3]/ul/div[1]/li/span")).click();
        await driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/div/div/div/div/form/button")), 10000);
        await driver.findElement(By.xpath("//*[@id=\"root\"]/div[2]/div[2]/div/div/div/div/form/button")).click();
    });
});


