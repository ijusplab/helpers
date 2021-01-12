import toLocaleNumberFormat from './toLocaleNumberFormat';

describe('Testing toLocaleNumberFormat...', () => {
  it('Should return valid number when given a number or a numeric string in local number format', () => {
    expect(toLocaleNumberFormat(1000.2345, 0, 'pt-BR')).toBe('1.000');
    expect(toLocaleNumberFormat(1000.2345, 2, 'pt-BR')).toBe('1.000,23');
    expect(toLocaleNumberFormat(1000.2345, 4, 'pt-BR')).toBe('1.000,2345');
    expect(toLocaleNumberFormat(-1000.2345, undefined, 'pt-BR')).toBe('-1.000');
    expect(toLocaleNumberFormat('1000000,2345', 0, 'pt-BR')).toBe('1.000.000');
    expect(toLocaleNumberFormat('1.000.000,2345', 2, 'pt-BR')).toBe('1.000.000,23');
    expect(toLocaleNumberFormat('1000000.2345', 4, 'pt-BR')).toBe('1.000.000,2345');
    expect(toLocaleNumberFormat('1,000,000.2345', undefined, 'pt-BR')).toBe('1.000.000');
    expect(toLocaleNumberFormat(1000.2345, 0, 'en-US')).toBe('1,000');
    expect(toLocaleNumberFormat(1000.2345, 2, 'en-US')).toBe('1,000.23');
    expect(toLocaleNumberFormat(1000.2345, 4, 'en-US')).toBe('1,000.2345');
    expect(toLocaleNumberFormat(-1000.2345, undefined, 'en-US')).toBe('-1,000');
    expect(toLocaleNumberFormat('1000000,2345', 0, 'en-US')).toBe('1,000,000');
    expect(toLocaleNumberFormat('1.000.000,2345', 2, 'en-US')).toBe('1,000,000.23');
    expect(toLocaleNumberFormat('1000000.2345', 4, 'en-US')).toBe('1,000,000.2345');
    expect(toLocaleNumberFormat('1,000,000.2345', undefined, 'en-US')).toBe('1,000,000');
  });
  it('Should return valid number using user locale when no locale is given', () => {
    expect(toLocaleNumberFormat(1000.2345, undefined)).toBe(
      toLocaleNumberFormat(1000.2345, undefined, Intl.DateTimeFormat().resolvedOptions().locale)
    );
    expect(toLocaleNumberFormat(-1000.2345, undefined)).toBe(
      toLocaleNumberFormat(-1000.2345, undefined, Intl.DateTimeFormat().resolvedOptions().locale)
    );
    expect(toLocaleNumberFormat(1000.2345, 3)).toBe(
      toLocaleNumberFormat(1000.2345, 3, Intl.DateTimeFormat().resolvedOptions().locale)
    );
    expect(toLocaleNumberFormat(-1000.2345, 3)).toBe(
      toLocaleNumberFormat(-1000.2345, 3, Intl.DateTimeFormat().resolvedOptions().locale)
    );
  });
  it('Should throw exception when parameters are invalid', () => {
    // @ts-expect-error Testing for errors now
    expect(() => toLocaleNumberFormat()).toThrow('The function accepts only numeric values!');
    expect(() => toLocaleNumberFormat(NaN)).toThrow('The function accepts only numeric values!');
    expect(() => toLocaleNumberFormat('$1234')).toThrow('The function accepts only numeric values!');
    expect(() => toLocaleNumberFormat('a thousand')).toThrow('The function accepts only numeric values!');
  });
});
