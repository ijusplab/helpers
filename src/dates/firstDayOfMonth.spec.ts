import firstDayOfMonth from './firstDayOfMonth';

describe('Testing firstDayOfMonth...', () => {
  it('Should corretly set the first day of the month of any given date', () => {
    expect(firstDayOfMonth(new Date(2020, 0, 31))).toEqual(new Date(2020, 0, 1));
    expect(firstDayOfMonth(new Date(2020, 1, 28))).toEqual(new Date(2020, 1, 1));
    expect(firstDayOfMonth(new Date(2020, 11, 15))).toEqual(new Date(2020, 11, 1));
  });
  it('Should corretly add or subtract months', () => {
    expect(firstDayOfMonth(new Date(2020, 0, 31), 5)).toEqual(new Date(2020, 5, 1));
    expect(firstDayOfMonth(new Date(2020, 5, 30), -5)).toEqual(new Date(2020, 0, 1));
  });
  it('Should corretly throw exception when parameters are invalid', () => {
    expect(() => firstDayOfMonth(new Date('invalid'))).toThrow('The function accepts valid dates only!');
  });
});
