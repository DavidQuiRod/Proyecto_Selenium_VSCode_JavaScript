const {Builder, By, Key, until} = require('selenium-webdriver');

async function Scenario1() {
  let driver = await new Builder().forBrowser('chrome').build();
     //Step 1 Open LambdaTest’s Selenium Playground from https://www.lambdatest.com/selenium-playground
    await driver.get('https://www.lambdatest.com/selenium-playground');
    //Step2 Click “Simple Form Demo”.
    await driver.findElement(By.xpath('//*[@id="__next"]/div/section[2]/div/ul/li[34]/a')).click();
    //Step 3 Validate that the URL contains “simple-form-demo”.
    const textURL=driver.getCurrentUrl();
    if((await textURL).includes('simple-form-demo')){
        console.log('URL contais simple-form-demo')
    } else{
        console.log('The URL no cotains simple-form-demo check your url')
    }
    
//Step 4 Create a variable for a string value, e.g., “Welcome to LambdaTest”.
//Step 5 Use this variable to enter values in the “Enter Message” text box.
//Step 6 Click “Get Checked Value”.
//Step 7 Validate whether the same text message is displayed in the right-hand panel under the “Your Message:” section
    await driver.findElement(By.xpath('//*[@id="user-message"]')).sendKeys('Prueba');
  
}

Scenario1();