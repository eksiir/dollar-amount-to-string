import { browser, element, by } from 'protractor';

export class DollarAmountToStringPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cda-app-root h1')).getText();
  }
}
