/* eslint-disable @typescript-eslint/no-explicit-any */
import validateCpf from './validateCpf';

describe('Testing validateCpf...', () => {
  it('Should identify valid CPF numbers', () => {
    expect(validateCpf('717.720.785-65')).toEqual(true);
    expect(validateCpf(71772078565)).toEqual(true);
    expect(validateCpf('009.586.946-80')).toEqual(true);
    expect(validateCpf('041.131.804-74')).toEqual(true);
    expect(validateCpf('952.920.818-92')).toEqual(true);
  });
  it('Should identify invalid CPF numbers', () => {
    expect(validateCpf('717.720.785-64')).toEqual(false);
    expect(validateCpf(71772078564)).toEqual(false);
    // @ts-expect-error Testing for errors now
    expect(validateCpf()).toEqual(false);
    expect(validateCpf(123456)).toEqual(false);
    expect(validateCpf('000.000.000-00')).toEqual(false);
    expect(validateCpf('111.111.111-11')).toEqual(false);
    expect(validateCpf('222.222.222-22')).toEqual(false);
    expect(validateCpf('333.333.333-33')).toEqual(false);
    expect(validateCpf('444.444.444-44')).toEqual(false);
    expect(validateCpf('555.555.555-55')).toEqual(false);
    expect(validateCpf('666.666.666-66')).toEqual(false);
    expect(validateCpf('777.777.777-77')).toEqual(false);
    expect(validateCpf('888.888.888-88')).toEqual(false);
    expect(validateCpf('999.999.999-99')).toEqual(false);
  });
});
