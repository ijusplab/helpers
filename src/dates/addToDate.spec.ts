import addToDate from './addToDate';
import { DURATION_TYPES } from '../enums';

describe('Testing addToDate...', () => {
  it('Should corretly return addition and subtractions in years', () => {
    expect(addToDate(new Date('2020-01-01T00:00'), 5, DURATION_TYPES.YEARS)).toEqual(new Date('2025-01-01T00:00'));
    expect(addToDate(new Date('2020-01-01T00:00'), -5, DURATION_TYPES.YEARS)).toEqual(new Date('2015-01-01T00:00'));
  });
  it('Should corretly return addition and subtractions in months', () => {
    expect(addToDate(new Date('2020-01-01T00:00'), 5, DURATION_TYPES.MONTHS)).toEqual(new Date('2020-06-01T00:00'));
    expect(addToDate(new Date('2020-01-01T00:00'), -5, DURATION_TYPES.MONTHS)).toEqual(new Date('2019-08-01T00:00'));
  });
  it('Should corretly return addition and subtractions in days', () => {
    expect(addToDate(new Date('2020-01-01T00:00'), 5, DURATION_TYPES.DAYS)).toEqual(new Date('2020-01-06T00:00'));
    expect(addToDate(new Date('2020-01-01T00:00'), -5, DURATION_TYPES.DAYS)).toEqual(new Date('2019-12-27T00:00'));
  });
  it('Should corretly return addition and subtractions in weeks', () => {
    expect(addToDate(new Date('2020-01-01T00:00'), 1, DURATION_TYPES.WEEKS)).toEqual(new Date('2020-01-08T00:00'));
    expect(addToDate(new Date('2020-01-01T00:00'), -1, DURATION_TYPES.WEEKS)).toEqual(new Date('2019-12-25T00:00'));
  });
  it('Should corretly return addition and subtractions in hours', () => {
    expect(addToDate(new Date('2020-01-01T00:00'), 5, DURATION_TYPES.HOURS)).toEqual(new Date('2020-01-01T05:00'));
    expect(addToDate(new Date('2020-01-01T00:00'), -5, DURATION_TYPES.HOURS)).toEqual(new Date('2019-12-31T19:00'));
  });
  it('Should corretly return addition and subtractions in minutes', () => {
    expect(addToDate(new Date('2020-01-01T00:00'), 61, DURATION_TYPES.MINUTES)).toEqual(new Date('2020-01-01T01:01'));
    expect(addToDate(new Date('2020-01-01T00:00'), -61, DURATION_TYPES.MINUTES)).toEqual(new Date('2019-12-31T22:59'));
  });
  it('Should corretly return addition and subtractions in seconds', () => {
    expect(addToDate(new Date('2020-01-01T00:00'), 61, DURATION_TYPES.SECONDS)).toEqual(new Date(2020, 0, 1, 0, 1, 1));
    expect(addToDate(new Date('2020-01-01T00:00'), -61, DURATION_TYPES.SECONDS)).toEqual(
      new Date(2019, 11, 31, 23, 58, 59)
    );
  });

  it('Should throw exception if parameters are invalid', () => {
    expect(() => addToDate(new Date('invalid'), 1, DURATION_TYPES.SECONDS)).toThrow(
      'The function accepts valid dates only!'
    );
    // @ts-expect-error Testing for errors now
    expect(() => addToDate(new Date(), 0, 'invalid')).toThrow('Invalid duration parameter!');
  });
});
