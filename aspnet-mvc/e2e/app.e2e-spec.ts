import { AspNetNg4RoutingPage } from './app.po';

describe('asp-net-ng4-routing App', () => {
  let page: AspNetNg4RoutingPage;

  beforeEach(() => {
    page = new AspNetNg4RoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
