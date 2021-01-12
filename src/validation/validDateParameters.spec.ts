import validDateParameters from './validDateParameters';

describe('Testing validDateParameters...', () => {
  it('Shoud test true for trivial valid dates', () => {
    expect(validDateParameters(1900, 1, 1)).toBe(true);
    expect(validDateParameters(1993, 2, 28)).toBe(true);
    expect(validDateParameters(2020, 3, 31)).toBe(true);
    expect(validDateParameters(2021, 9, 30)).toBe(true);
  });
  it('Should also test true for February 29th in leap years', () => {
    expect(validDateParameters(1004, 2, 29)).toBe(true);
    expect(validDateParameters(1008, 2, 29)).toBe(true);
    expect(validDateParameters(1012, 2, 29)).toBe(true);
    expect(validDateParameters(1016, 2, 29)).toBe(true);
    expect(validDateParameters(1020, 2, 29)).toBe(true);
    expect(validDateParameters(1992, 2, 29)).toBe(true);
    expect(validDateParameters(1996, 2, 29)).toBe(true);
    expect(validDateParameters(2000, 2, 29)).toBe(true);
    expect(validDateParameters(2004, 2, 29)).toBe(true);
    expect(validDateParameters(2008, 2, 29)).toBe(true);
    expect(validDateParameters(2012, 2, 29)).toBe(true);
    expect(validDateParameters(2016, 2, 29)).toBe(true);
    expect(validDateParameters(2020, 2, 29)).toBe(true);
    expect(validDateParameters(2024, 2, 29)).toBe(true);
  });
  it('Should not test ture for February 29th in non leap years', () => {
    expect(validDateParameters(1005, 2, 29)).toBe(false);
    expect(validDateParameters(1009, 2, 29)).toBe(false);
    expect(validDateParameters(1013, 2, 29)).toBe(false);
    expect(validDateParameters(1017, 2, 29)).toBe(false);
    expect(validDateParameters(1021, 2, 29)).toBe(false);
    expect(validDateParameters(1993, 2, 29)).toBe(false);
    expect(validDateParameters(1997, 2, 29)).toBe(false);
    expect(validDateParameters(2001, 2, 29)).toBe(false);
    expect(validDateParameters(2005, 2, 29)).toBe(false);
    expect(validDateParameters(2009, 2, 29)).toBe(false);
    expect(validDateParameters(2013, 2, 29)).toBe(false);
    expect(validDateParameters(2017, 2, 29)).toBe(false);
    expect(validDateParameters(2021, 2, 29)).toBe(false);
    expect(validDateParameters(2025, 2, 29)).toBe(false);
  });
  it('Should test false for invalid years', () => {
    expect(validDateParameters(-1, 12, 31)).toBe(false);
  });
  it('Should test false for invalid months', () => {
    expect(validDateParameters(1900, 13, 1)).toBe(false);
    expect(validDateParameters(2020, -1, 31)).toBe(false);
  });
  it('Should test false for invalid days', () => {
    expect(validDateParameters(2020, 1, 0)).toBe(false);
    expect(validDateParameters(2020, 1, -1)).toBe(false);
    expect(validDateParameters(2020, 1, 32)).toBe(false);
    expect(validDateParameters(2020, 2, 30)).toBe(false);
    expect(validDateParameters(2020, 4, 31)).toBe(false);
  });
});
