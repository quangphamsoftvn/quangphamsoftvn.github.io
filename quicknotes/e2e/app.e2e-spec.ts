import { QuicknotesPage } from './app.po';

describe('quicknotes App', function() {
  let page: QuicknotesPage;

  beforeEach(() => {
    page = new QuicknotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
