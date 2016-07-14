export class DataTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('data-test-app h1')).getText();
  }
}
