import parseFloatLocale from './parseFloatLocale';

describe('Testing parseFloatLocale...', () => {
  it('Should return valid number when given a number or a numeric string in local number format', () => {
    expect(parseFloatLocale(1000)).toBe(1000);
    expect(parseFloatLocale(-1000)).toBe(-1000);
    expect(parseFloatLocale(0)).toBe(0);
    expect(parseFloatLocale(0.456789)).toBe(0.456789);
    expect(parseFloatLocale(-0.456789)).toBe(-0.456789);
    expect(parseFloatLocale('1000')).toBe(1000);
    expect(parseFloatLocale('-R$ 1000')).toBe(-1000);
    expect(parseFloatLocale('0')).toBe(0);
    expect(parseFloatLocale('0.456789')).toBe(0.456789);
    expect(parseFloatLocale('-0.456789')).toBe(-0.456789);
    expect(parseFloatLocale('US$1.000,00')).toBe(1000);
    expect(parseFloatLocale('1,000.00')).toBe(1000);
    expect(parseFloatLocale('1000.00')).toBe(1000);
    expect(parseFloatLocale('1000,00')).toBe(1000);
    expect(parseFloatLocale('-US$ 1.000,00')).toBe(-1000);
    expect(parseFloatLocale('-1,000.00')).toBe(-1000);
    expect(parseFloatLocale('-1000.00')).toBe(-1000);
    expect(parseFloatLocale('-1000,00')).toBe(-1000);
    expect(parseFloatLocale('0.0000')).toBe(0);
    expect(parseFloatLocale('0,0000')).toBe(0);
    expect(parseFloatLocale('0,456789')).toBe(0.456789);
    expect(parseFloatLocale('-0,456789')).toBe(-0.456789);
  });
  it('Should throw exception when parameters are invalid', () => {
    // @ts-expect-error Testing for errors now
    expect(() => parseFloatLocale()).toThrow('Only numeric values are accepted!');
    expect(() => parseFloatLocale(NaN)).toThrow('Only numeric values are accepted!');
    expect(() => parseFloatLocale('a thousand')).toThrow('Only numeric values are accepted!');
    expect(() => parseFloatLocale('123-2345')).toThrow('Invalid input!');
  });
});
