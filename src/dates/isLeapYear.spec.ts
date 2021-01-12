import isLeapYear from './isLeapYear';

describe('Testing isLeapYaer...', () => {
  it('Should inform correctly any given leap year', () => {
    expect(isLeapYear(1804)).toBe(true);
    expect(isLeapYear(1824)).toBe(true);
    expect(isLeapYear(1916)).toBe(true);
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(2080)).toBe(true);
    expect(isLeapYear(2124)).toBe(true);
    expect(isLeapYear(2332)).toBe(true);
    expect(isLeapYear(2396)).toBe(true);
  });
  it('Should inform correctly any given non leap year', () => {
    expect(isLeapYear(1806)).toBe(false);
    expect(isLeapYear(1826)).toBe(false);
    expect(isLeapYear(1918)).toBe(false);
    expect(isLeapYear(2026)).toBe(false);
    expect(isLeapYear(2082)).toBe(false);
    expect(isLeapYear(2126)).toBe(false);
    expect(isLeapYear(2334)).toBe(false);
    expect(isLeapYear(2398)).toBe(false);
  });
});
