const {Builder, By, Key, until} = require('selenium-webdriver');
const { Locator } = require('selenium-webdriver/bidi/browsingContext');
const { Actions } = require('selenium-webdriver/lib/input');

async function Scenario2(){
/*.

*/ 
    let driver = await new Builder().forBrowser('chrome').build();
    //Step 1 Open the https://www.lambdatest.com/selenium-playground page and click “Drag & Drop Sliders”
    await driver.get('https://www.lambdatest.com/selenium-playground');
    await driver.manage().window().maximize();
    await driver.findElement(By.xpath('//*[@id="__next"]/div/section[2]/div/ul/li[13]/a')).click();
    //Step 2 Select the slider “Default value 15” and drag the bar to make it 95 by validating whether the range value shows 95.
    let deslizador= await driver.findElement(By.xpath('//*[@id="slider3"]/div/input')); //Indentificamos el slider bar
    const actions= driver.actions({async:true}); //
    await actions.move({origin: deslizador, x:215, y:0}).click().perform(); //Medida correcta para X 215 para llegar a la barra en 95
    const valorFinal= await driver.findElement(By.xpath('//*[@id="rangeSuccess"]')).getText();
    console.log(valorFinal);
    if(valorFinal==95){
        console.log('El slider bar se encuentra en 95');
        await driver.close();
    }else{
        console.log('El slider bar se encuentra con otro numero diferente al 95');
    }

  
};

Scenario2();