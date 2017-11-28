import { HardwareAssessmentToolPage } from './app.po';

describe('hardware-assessment-tool App', () => {
  let page: HardwareAssessmentToolPage;

  beforeEach(() => {
    page = new HardwareAssessmentToolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
