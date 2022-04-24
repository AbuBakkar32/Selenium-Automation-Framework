const {By, Key, Builder, Browser, until} = require("selenium-webdriver");
require("chromedriver");
var should = require('chai').should()
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

async function example() {

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    //To fetch http://google.com from the browser with our code.
    await driver.get("https://www.cart.com/");
    await driver.findElement(By.linkText("Sign in")).click();

    await driver.wait(until.elementLocated(By.className("h3")), 10000);

    await driver.findElement(By.linkText("Create Account")).click();
    await driver.findElement(By.id("x_first_name")).sendKeys("Abu Bakkar");
    await sleep(1000);
    await driver.findElement(By.id("x_last_name")).sendKeys("Siddik");
    await sleep(1000);
    await driver.findElement(By.id("email")).sendKeys("abubakkar.swee1@gmail.com");
    await sleep(1000);
    await driver.findElement(By.id("password")).sendKeys("AbuBakkar@32");
    await sleep(1000);
    await driver.findElement(By.id("phone")).sendKeys("+8801689040992");
    await sleep(2000);
    await driver.findElement(By.xpath("//*[@id=\"btn-signup\"]")).click();
    await sleep(5000);
    await driver.findElement(By.className("css-1co3iwm")).getText().then(function(text){
        console.log(text);
    });
}

example();

// "scripts": {
//     "test": "mocha --no-timeouts --parallel"
// },