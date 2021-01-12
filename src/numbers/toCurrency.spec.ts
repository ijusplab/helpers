import toCurrency from './toCurrency';
import { CURRENCY_CODES } from '../enums';

describe('Testing toCurrency...', () => {
  const nbsp = String.fromCharCode(160);
  const BRL = `R$${nbsp}`;
  it('Should return valid number when given a number or a numeric string in local number format', () => {
    expect(toCurrency(1000.2345, undefined, 'pt-BR')).toBe('$1.000,23');
    expect(toCurrency(-1000.2345, undefined, 'pt-BR')).toBe('-$1.000,23');
    expect(toCurrency('1000000,2345', undefined, 'pt-BR')).toBe('$1.000.000,23');
    expect(toCurrency('1.000.000,2345', undefined, 'pt-BR')).toBe('$1.000.000,23');
    expect(toCurrency('1000000.2345', undefined, 'pt-BR')).toBe('$1.000.000,23');
    expect(toCurrency('1,000,000.2345', undefined, 'pt-BR')).toBe('$1.000.000,23');
    expect(toCurrency('1000000,2345', CURRENCY_CODES.BRL, 'pt-BR')).toBe(`${BRL}1.000.000,23`);
    expect(toCurrency('1.000.000,2345', CURRENCY_CODES.BRL, 'pt-BR')).toBe(`${BRL}1.000.000,23`);
    expect(toCurrency('1000000.2345', CURRENCY_CODES.BRL, 'pt-BR')).toBe(`${BRL}1.000.000,23`);
    expect(toCurrency('1,000,000.2345', CURRENCY_CODES.BRL, 'pt-BR')).toBe(`${BRL}1.000.000,23`);
    expect(toCurrency('-1,000,000.2345', CURRENCY_CODES.BRL, 'pt-BR')).toBe(`-${BRL}1.000.000,23`);
    expect(toCurrency('1000000,2345', CURRENCY_CODES.USD, 'en-US')).toBe(`$1,000,000.23`);
    expect(toCurrency('1.000.000,2345', CURRENCY_CODES.USD, 'en-US')).toBe(`$1,000,000.23`);
    expect(toCurrency('1000000.2345', CURRENCY_CODES.USD, 'en-US')).toBe(`$1,000,000.23`);
    expect(toCurrency('1,000,000.2345', CURRENCY_CODES.USD, 'en-US')).toBe(`$1,000,000.23`);
    expect(toCurrency('-1,000,000.2345', CURRENCY_CODES.USD, 'en-US')).toBe(`-$1,000,000.23`);
  });
  it('Should return valid number using user locale when no locale is given', () => {
    expect(toCurrency(1000.2345)).toBe(
      toCurrency(1000.2345, undefined, Intl.DateTimeFormat().resolvedOptions().locale)
    );
    expect(toCurrency(-1000.2345)).toBe(
      toCurrency(-1000.2345, undefined, Intl.DateTimeFormat().resolvedOptions().locale)
    );
  });
  it('Should throw exception when parameters are invalid', () => {
    // @ts-expect-error Testing for errors now
    expect(() => toCurrency()).toThrow('The function accepts only numeric values!');
    expect(() => toCurrency(NaN)).toThrow('The function accepts only numeric values!');
    expect(() => toCurrency('$1234')).toThrow('The function accepts only numeric values!');
    expect(() => toCurrency('a thousand')).toThrow('The function accepts only numeric values!');
  });
});
