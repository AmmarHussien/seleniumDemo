require("chromedriver");
const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();

//describe block
//describe("");

//it block

async function example() {
  //launch the browser

  let driver = await new Builder().forBrowser("chrome").build();
  // navigate to our application

  await driver.get("https://demo.passboard.net/auth/login");

  let Email = "ammarrrab3a@yahoo.com";
  let Password = "P@ssw0rd";

  //assert.strictEqual(loginSuccess, "Sign In");

  await driver
    .findElement(
      By.xpath(
        "/html/body/div/div/div/div/div/div[2]/div/div/div/form/div[1]/div[1]/div/input"
      )
    )
    .sendKeys(Email);

  await driver
    .findElement(
      By.xpath(
        "/html/body/div/div/div/div/div/div[2]/div/div/div/form/div[1]/div[2]/div/input"
      )
    )
    .sendKeys(Password, Key.RETURN);

  let loginSuccess = await driver
    .findElement(
      By.xpath(
        "/html/body/div/div/div/div/div/div[2]/div/div/div/form/div[1]/div[1]/div/input"
      )
    )
    .getText()
    .then(function (text) {
      return text;
    });

  loginSuccess.should.not.equal("ammarrrab3a@yahoo.com");

  // close the browser
  //await driver.close();
}
example();
