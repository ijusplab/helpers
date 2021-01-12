import lastDayOfMonth from './lastDayOfMonth';

describe('Testing lastDayOfMonth...', () => {
  it('Should corretly set the last day of the month of any given date', () => {
    expect(lastDayOfMonth(new Date(2020, 0, 1))).toEqual(new Date(2020, 0, 31));
    expect(lastDayOfMonth(new Date(2020, 1, 1))).toEqual(new Date(2020, 1, 29));
    expect(lastDayOfMonth(new Date(2020, 11, 15))).toEqual(new Date(2020, 11, 31));
  });
  it('Should corretly add or subtract months', () => {
    expect(lastDayOfMonth(new Date(2020, 0, 1), 5)).toEqual(new Date(2020, 5, 30));
    expect(lastDayOfMonth(new Date(2020, 5, 1), -5)).toEqual(new Date(2020, 0, 31));
  });
  it('Should corretly throw exception when parameters are invalid', () => {
    expect(() => lastDayOfMonth(new Date('invalid'))).toThrow('The function accepts valid dates only!');
  });
});
