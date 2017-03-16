import { RoseRoutingPage } from './app.po';

describe('rose-routing App', () => {
  let page: RoseRoutingPage;

  beforeEach(() => {
    page = new RoseRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
