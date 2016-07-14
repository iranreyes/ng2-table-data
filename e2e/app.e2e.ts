import { DataTestPage } from './app.po';

describe('data-test App', function() {
  let page: DataTestPage;

  beforeEach(() => {
    page = new DataTestPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('data-test works!');
  });
});
