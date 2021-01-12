import toLocalePercentFormat from './toLocalePercentFormat';

describe('Testing toLocalePercentFormat...', () => {
  it('Should return valid percent number when given a number or a numeric string in local number format', () => {
    expect(toLocalePercentFormat(0.234567, 0, 'pt-BR')).toBe('23%');
    expect(toLocalePercentFormat(0.234567, 2, 'pt-BR')).toBe('23,46%');
    expect(toLocalePercentFormat(0.234567, 4, 'pt-BR')).toBe('23,4567%');
    expect(toLocalePercentFormat(-0.234567, undefined, 'pt-BR')).toBe('-23%');
    expect(toLocalePercentFormat(0.234567, 2, 'en-US')).toBe('23.46%');
    expect(toLocalePercentFormat(0.234567, 4, 'en-US')).toBe('23.4567%');
    expect(toLocalePercentFormat(-0.234567, 4, 'en-US')).toBe('-23.4567%');
  });
  it('Should return valid number using user locale when no locale is given', () => {
    expect(toLocalePercentFormat(0.234567, undefined)).toBe(
      toLocalePercentFormat(0.234567, undefined, Intl.DateTimeFormat().resolvedOptions().locale)
    );
    expect(toLocalePercentFormat(-0.234567, undefined)).toBe(
      toLocalePercentFormat(-0.234567, undefined, Intl.DateTimeFormat().resolvedOptions().locale)
    );
    expect(toLocalePercentFormat(0.234567, 3)).toBe(
      toLocalePercentFormat(0.234567, 3, Intl.DateTimeFormat().resolvedOptions().locale)
    );
    expect(toLocalePercentFormat(-0.234567, 3)).toBe(
      toLocalePercentFormat(-0.234567, 3, Intl.DateTimeFormat().resolvedOptions().locale)
    );
  });
  it('Should throw exception when parameters are invalid', () => {
    // @ts-expect-error Testing for errors now
    expect(() => toLocalePercentFormat()).toThrow('The function accepts only numeric values!');
    expect(() => toLocalePercentFormat(NaN)).toThrow('The function accepts only numeric values!');
    expect(() => toLocalePercentFormat('$1234')).toThrow('The function accepts only numeric values!');
    expect(() => toLocalePercentFormat('a thousand')).toThrow('The function accepts only numeric values!');
  });
});
