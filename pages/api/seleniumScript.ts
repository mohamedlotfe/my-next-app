import { Builder, WebDriver } from 'selenium-webdriver';

export async function executeSeleniumScript(): Promise<void> {
  let driver: WebDriver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.google.com');
    await driver.findElement({ name: 'q' }).sendKeys('testing');
    await driver.findElement({ name: 'btnK' }).click();
  }catch(e) {
    console.log(e);
  }
   finally {
    await driver.quit();
  }
}