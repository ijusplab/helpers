/* eslint-disable @typescript-eslint/no-explicit-any */
import validateCnpj from './validateCnpj';

describe('Testing validateCnpj...', () => {
  it('Should identify valid CPF numbers', () => {
    expect(validateCnpj('32.816.652/2541-03')).toEqual(true);
    expect(validateCnpj(32816652254103)).toEqual(true);
    expect(validateCnpj('61.586.637/5113-70')).toEqual(true);
    expect(validateCnpj('90.647.052/4092-07')).toEqual(true);
    expect(validateCnpj('39.494.738/4224-24')).toEqual(true);
  });
  it('Should identify invalid CPF numbers', () => {
    expect(validateCnpj('32.816.652/2541-02')).toEqual(false);
    expect(validateCnpj(32816652254102)).toEqual(false);
    // @ts-expect-error Testing for errors now
    expect(validateCnpj()).toEqual(false);
    expect(validateCnpj(123456)).toEqual(false);
    expect(validateCnpj('00.000.000/0000-00')).toEqual(false);
    expect(validateCnpj('11.111.111/1111-11')).toEqual(false);
    expect(validateCnpj('22.222.222/2222-22')).toEqual(false);
    expect(validateCnpj('33.333.333/3333-33')).toEqual(false);
    expect(validateCnpj('44.444.444/4444-44')).toEqual(false);
    expect(validateCnpj('55.555.555/5555-55')).toEqual(false);
    expect(validateCnpj('66.666.666/6666-66')).toEqual(false);
    expect(validateCnpj('77.777.777/7777-77')).toEqual(false);
    expect(validateCnpj('88.888.888/8888-88')).toEqual(false);
    expect(validateCnpj('99.999.999/9999-99')).toEqual(false);
  });
});
