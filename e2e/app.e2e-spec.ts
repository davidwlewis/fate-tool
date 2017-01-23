import { FateToolPage } from './app.po';

describe('fate-tool App', function() {
  let page: FateToolPage;

  beforeEach(() => {
    page = new FateToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
