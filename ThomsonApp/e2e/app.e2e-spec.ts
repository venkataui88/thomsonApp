import { ThomsonAppPage } from './app.po';

describe('thomson-app App', function() {
  let page: ThomsonAppPage;

  beforeEach(() => {
    page = new ThomsonAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
