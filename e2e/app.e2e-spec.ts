import { AngularMaterialFormBuilderValidationPage } from './app.po';

describe('angular-material-form-builder-validation App', () => {
  let page: AngularMaterialFormBuilderValidationPage;

  beforeEach(() => {
    page = new AngularMaterialFormBuilderValidationPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
