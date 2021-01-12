import dateToString from './dateToString';
import { DATE_OUTPUT_FORMATS } from '../enums';

describe('Testing dateToString...', () => {
  it('Should convert dates to multiple types of strings', () => {
    expect(dateToString(new Date('2020-01-01T00:00'))).toEqual('2020-01-01');
    expect(dateToString(new Date('2020-01-01T00:00'), DATE_OUTPUT_FORMATS.ISO)).toEqual('2020-01-01T03:00:00.000Z');
    expect(dateToString(new Date('2020-01-01T00:00'), DATE_OUTPUT_FORMATS.SHORT_LOCALE)).toEqual('01/01/2020');
    expect(dateToString(new Date('2020-01-01T00:00'), DATE_OUTPUT_FORMATS.LOCALE)).toEqual('1 de janeiro de 2020');
  });
  it('Should throw exceptions when date is invalid', () => {
    expect(() => dateToString(new Date('invalid'))).toThrow('Invalid date!');
    //@ts-expect-error Testing for errors now
    expect(() => dateToString(new Date(1999, 1, 1), 'NON EXISTENT')).toThrow('Invalid output format!');
  });
});
