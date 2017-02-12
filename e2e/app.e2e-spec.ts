import { Ng11Page } from './app.po';

describe('ng11 App', function() {
  let page: Ng11Page;

  beforeEach(() => {
    page = new Ng11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
