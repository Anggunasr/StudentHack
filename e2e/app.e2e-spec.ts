import { StudenthackPage } from './app.po';

describe('studenthack App', () => {
  let page: StudenthackPage;

  beforeEach(() => {
    page = new StudenthackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
