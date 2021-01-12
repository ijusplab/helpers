import isLastOfFebruary from './isLastOfFebruary';

describe('Testing isLastOfFebruary...', () => {
  it('Shoud say true for the following dates', () => {
    expect(isLastOfFebruary(new Date('2020-02-29T00:00'))).toBe(true);
    expect(isLastOfFebruary(new Date('1805-02-28T00:00'))).toBe(true);
    expect(isLastOfFebruary(new Date('1944-02-29T00:00'))).toBe(true);
    expect(isLastOfFebruary(new Date('2004-02-29T00:00'))).toBe(true);
    expect(isLastOfFebruary(new Date('2327-02-28T00:00'))).toBe(true);
  });
  it('Should say false for these other dates', () => {
    expect(isLastOfFebruary(new Date('2020-02-28T00:00'))).toBe(false);
    expect(isLastOfFebruary(new Date('2020-02-03T00:00'))).toBe(false);
    expect(isLastOfFebruary(new Date('1945-02-27T00:00'))).toBe(false);
    expect(isLastOfFebruary(new Date('2019-02-29T00:00'))).toBe(false);
    expect(isLastOfFebruary(new Date('2010-01-31T00:00'))).toBe(false);
    expect(isLastOfFebruary(new Date('2010-03-01T00:00'))).toBe(false);
  });
});
