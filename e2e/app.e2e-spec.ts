import { DollarAmountToStringPage } from './app.po';

describe('dollar-amount-to-string App', function() {
  let page: DollarAmountToStringPage;

  beforeEach(() => {
    page = new DollarAmountToStringPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
