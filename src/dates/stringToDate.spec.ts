import stringToDate from './stringToDate';
import { DATE_INPUT_FORMATS } from '../enums';

describe('Testing stringToDate...', () => {
  it('Should correctly convert strings to date', () => {
    expect(stringToDate('2021-01-06T05:57:20.154Z')).toEqual(new Date('2021-01-06T05:57:20.154Z'));
    expect(stringToDate('2021-01-06')).toEqual(new Date('2021-01-06T00:00'));
    expect(stringToDate('06-01-2021', DATE_INPUT_FORMATS.DD_MM_YYYY)).toEqual(new Date('2021-01-06T00:00'));
    expect(stringToDate('06.01.2021', DATE_INPUT_FORMATS.DD_MM_YYYY)).toEqual(new Date('2021-01-06T00:00'));
    expect(stringToDate('06/01/2021', DATE_INPUT_FORMATS.DD_MM_YYYY)).toEqual(new Date('2021-01-06T00:00'));
    expect(stringToDate('01-2021', DATE_INPUT_FORMATS.MM_YYYY)).toEqual(new Date('2021-01-01T00:00'));
    expect(stringToDate('01.2021', DATE_INPUT_FORMATS.MM_YYYY)).toEqual(new Date('2021-01-01T00:00'));
    expect(stringToDate('01/2021', DATE_INPUT_FORMATS.MM_YYYY)).toEqual(new Date('2021-01-01T00:00'));
    expect(stringToDate('01/21', DATE_INPUT_FORMATS.MM_YY)).toEqual(new Date('1921-01-01T00:00'));
    expect(stringToDate('01-06-2021', DATE_INPUT_FORMATS.MM_DD_YYYY)).toEqual(new Date('2021-01-06T00:00'));
  });
  it('Should throw errors when parameters for convertion are invalid', () => {
    // @ts-expect-error Testing for errors now
    expect(() => stringToDate(new Date())).toThrow('The function accepts strings only!');
    expect(() => stringToDate('00-00-0000', DATE_INPUT_FORMATS.DD_MM_YYYY)).toThrow('Invalid date string!');
    expect(() => stringToDate('01/01/2020')).toThrow('Invalid date string!');
    // @ts-expect-error Testing for errors now
    expect(() => stringToDate('01/01/2020', 'YYYY.MM.MM')).toThrow('Invalid date format!');
    expect(() => stringToDate('01/2020', DATE_INPUT_FORMATS.DD_MM_YYYY)).toThrow(
      'Date string must match input format!'
    );
    expect(() => stringToDate('31/02/2020', DATE_INPUT_FORMATS.DD_MM_YYYY)).toThrow('Invalid date: 2020-02-31!');
  });
});
