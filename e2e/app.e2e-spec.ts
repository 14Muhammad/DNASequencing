import { DNASequencingPage } from './app.po';

describe('dna-sequencing App', function() {
  let page: DNASequencingPage;

  beforeEach(() => {
    page = new DNASequencingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
