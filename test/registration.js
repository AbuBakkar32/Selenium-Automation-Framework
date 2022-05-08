const {By, Key, Builder, Browser, until} = require("selenium-webdriver");
require("chromedriver");
var should = require('chai').should()
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

describe("Register a new user......", function () {
    let driver;
    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
    });
    afterEach(async function () {
        await driver.quit();
    });
    it("Register.......", async function () {

        //To wait for browser to build and launch properly
        let driver = await new Builder().forBrowser("chrome").build();

        //To fetch http://google.com from the browser with our code.
        await driver.get("https://www.cart.com/");

        await driver.findElement(By.linkText("Sign in")).click();

        await driver.wait(until.elementLocated(By.className("h3")), 10000);

        let rand_value = Math.random().toString(2).substring(2, 5);

        await driver.findElement(By.linkText("Create Account")).click();

        await driver.findElement(By.id("x_first_name")).sendKeys("Abu Bakkar");
        await driver.findElement(By.id("x_last_name")).sendKeys("Siddik");
        await driver.findElement(By.id("email")).sendKeys("abubakkar.swe" + rand_value + "@gmail.com");
        await driver.findElement(By.id("password")).sendKeys("AbuBakkar@32");
        await driver.findElement(By.id("phone")).sendKeys("+8801689040992");
        await driver.findElement(By.xpath("//*[@id=\"btn-signup\"]")).click();
        await driver.wait(until.elementLocated(By.xpath("/html/body/div[2]/main/div/div/p")), 10000);

        const x = await driver.findElement(By.xpath("/html/body/div[2]/main/div/div/p")).getText();
        if(x=="Create an organization to get started"){
            driver.quit();
        }
        else{
            console.log("Registration Failed");
        }

    });
});


