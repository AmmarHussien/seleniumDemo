require("chromedriver");
const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
const { it, describe } = require("mocha");
var should = require("chai").should();

//describe block
describe("add todo test", function () {
  //it blocks
  it("successfully adds a todo to application", async function () {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn Selenuim", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //assert using node assertion
    assert.strictEqual(todoText, "Learn Selenuim");

    //assert using chai should
    //todoText.should.equal("Learn Selenuim");

    //close browser
    //await driver.close();
  });
});
