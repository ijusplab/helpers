import dateDiff from './dateDiff';
import { DURATION_TYPES } from '../enums';

describe('Testing dateDiff...', () => {
  it('Should corretly return differences in years', () => {
    expect(dateDiff(new Date('2020-01-01T00:00'), new Date('2021-01-01T00:00'), DURATION_TYPES.YEARS)).toBe(1);
    expect(dateDiff(new Date('2020-01-01T00:00'), new Date('2022-01-01T00:00'), DURATION_TYPES.YEARS)).toBe(2);
    expect(dateDiff(new Date('2020-01-01T00:00'), new Date('2030-01-01T00:00'), DURATION_TYPES.YEARS)).toBe(10);
    expect(dateDiff(new Date('2030-01-01T00:00'), new Date('2020-01-01T00:00'), DURATION_TYPES.YEARS)).toBe(-10);
    expect(dateDiff(new Date('2020-01-01T00:00'), new Date('1999-01-01T00:00'), DURATION_TYPES.YEARS)).toBe(-21);
    expect(dateDiff(new Date('2020-01-01T00:00'), new Date('2020-06-01T00:00'), DURATION_TYPES.YEARS)).toBe(0);
    expect(dateDiff(new Date('1999-12-31T00:00'), new Date('2020-01-01T00:00'), DURATION_TYPES.YEARS)).toBe(21);
    expect(dateDiff(new Date('1999-06-01T00:00'), new Date('2020-01-01T00:00'), DURATION_TYPES.YEARS)).toBe(21);
  });
  it('Should corretly return differences in months', () => {
    expect(dateDiff(new Date('2020-01-01T00:00'), new Date('2020-06-01T00:00'), DURATION_TYPES.MONTHS)).toBe(5);
    expect(dateDiff(new Date('2020-06-01T00:00'), new Date('2020-01-01T00:00'), DURATION_TYPES.MONTHS)).toBe(-5);
    expect(dateDiff(new Date('2020-01-01T00:00'), new Date('2021-01-01T00:00'), DURATION_TYPES.MONTHS)).toBe(12);
    expect(dateDiff(new Date('2020-01-01T00:00'), new Date('2021-07-01T00:00'), DURATION_TYPES.MONTHS)).toBe(18);
    expect(dateDiff(new Date('2021-07-01T00:00'), new Date('2021-01-01T00:00'), DURATION_TYPES.MONTHS)).toBe(-6);
  });
  it('Should corretly return differences in days', () => {
    expect(dateDiff(new Date('2020-01-01T00:00'), new Date('2020-01-01T00:00'), DURATION_TYPES.DAYS)).toBe(0);
    expect(dateDiff(new Date('2020-01-01T00:00'), new Date('2020-01-02T00:00'), DURATION_TYPES.DAYS)).toBe(1);
    expect(dateDiff(new Date('2020-01-01T00:00'), new Date('2019-12-31T00:00'), DURATION_TYPES.DAYS)).toBe(-1);
    expect(dateDiff(new Date('2020-01-01T00:00'), new Date('2020-12-31T00:00'), DURATION_TYPES.DAYS)).toBe(365);
  });
  it('Should corretly return differences in hours', () => {
    expect(dateDiff(new Date('2020-01-01T12:00'), new Date('2020-01-02T00:00'), DURATION_TYPES.HOURS)).toBe(12);
    expect(dateDiff(new Date('2020-01-01T12:00'), new Date('2020-01-02T12:00'), DURATION_TYPES.HOURS)).toBe(24);
    expect(dateDiff(new Date('2020-01-01T12:00'), new Date('2020-01-03T12:00'), DURATION_TYPES.HOURS)).toBe(48);
    expect(dateDiff(new Date('2020-01-01T12:00'), new Date('2020-01-04T12:00'), DURATION_TYPES.HOURS)).toBe(72);
  });
  it('Should corretly return differences in minutes', () => {
    expect(dateDiff(new Date(2020, 0, 1, 1, 0), new Date(2020, 0, 1, 1, 0), DURATION_TYPES.MINUTES)).toBe(0);
    expect(dateDiff(new Date(2020, 0, 1, 1, 0), new Date(2020, 0, 1, 1, 1), DURATION_TYPES.MINUTES)).toBe(1);
    expect(dateDiff(new Date(2020, 0, 1, 1, 0), new Date(2020, 0, 1, 0, 59), DURATION_TYPES.MINUTES)).toBe(-1);
    expect(dateDiff(new Date(2020, 0, 1, 1, 0), new Date(2020, 0, 1, 2, 0), DURATION_TYPES.MINUTES)).toBe(60);
    expect(dateDiff(new Date(2020, 0, 1, 1, 0), new Date(2020, 0, 2, 1, 0), DURATION_TYPES.MINUTES)).toBe(60 * 24);
    expect(dateDiff(new Date(2020, 0, 2, 1, 0), new Date(2020, 0, 1, 1, 0), DURATION_TYPES.MINUTES)).toBe(-60 * 24);
  });
  it('Should corretly return differences in seconds', () => {
    expect(dateDiff(new Date(2020, 0, 1, 1, 1, 0), new Date(2020, 0, 1, 1, 1, 0), DURATION_TYPES.SECONDS)).toBe(0);
    expect(dateDiff(new Date(2020, 0, 1, 1, 1, 0), new Date(2020, 0, 1, 1, 1, 1), DURATION_TYPES.SECONDS)).toBe(1);
    expect(dateDiff(new Date(2020, 0, 1, 1, 1, 0), new Date(2020, 0, 1, 1, 0, 59), DURATION_TYPES.SECONDS)).toBe(-1);
    expect(dateDiff(new Date(2020, 0, 1, 1, 1, 0), new Date(2020, 0, 1, 1, 2, 0), DURATION_TYPES.SECONDS)).toBe(60);
    expect(dateDiff(new Date(2020, 0, 1, 1, 1, 0), new Date(2020, 0, 1, 2, 1, 0), DURATION_TYPES.SECONDS)).toBe(
      60 * 60
    );
    expect(dateDiff(new Date(2020, 0, 1, 1, 1, 0), new Date(2020, 0, 2, 1, 1, 0), DURATION_TYPES.SECONDS)).toBe(
      60 * 60 * 24
    );
  });
  it('Should corretly return differences in seconds without expressly giving the parameter', () => {
    expect(dateDiff(new Date(2020, 0, 1, 1, 1, 0), new Date(2020, 0, 1, 1, 1, 0))).toBe(0);
    expect(dateDiff(new Date(2020, 0, 1, 1, 1, 0), new Date(2020, 0, 1, 1, 1, 1))).toBe(1);
    expect(dateDiff(new Date(2020, 0, 1, 1, 1, 0), new Date(2020, 0, 1, 1, 0, 59))).toBe(-1);
    expect(dateDiff(new Date(2020, 0, 1, 1, 1, 0), new Date(2020, 0, 1, 1, 2, 0))).toBe(60);
    expect(dateDiff(new Date(2020, 0, 1, 1, 1, 0), new Date(2020, 0, 1, 2, 1, 0))).toBe(60 * 60);
    expect(dateDiff(new Date(2020, 0, 1, 1, 1, 0), new Date(2020, 0, 2, 1, 1, 0))).toBe(60 * 60 * 24);
  });
  it('Should throw exception if parameters are invalid', () => {
    expect(() => dateDiff(new Date('invalid'), new Date(), DURATION_TYPES.SECONDS)).toThrow(
      'The function accepts valid dates only!'
    );
    expect(() => dateDiff(new Date(), new Date('invalid'), DURATION_TYPES.SECONDS)).toThrow(
      'The function accepts valid dates only!'
    );
    // @ts-expect-error Testing for errors now
    expect(() => dateDiff(new Date(), new Date(), 'invalid')).toThrow('Invalid duration parameter!');
  });
});
