import days360 from './days360';
import { DAYS360_METHODS } from '../enums';

describe('Testing days360...', () => {
  it('Should return same Excel results for same methods', () => {
    expect(days360(new Date('2024-02-29T00:00'), new Date('2030-01-31T00:00'), DAYS360_METHODS.EXCEL)).toBe(2130);
    expect(days360(new Date('2024-02-29T00:00'), new Date('2030-01-31T00:00'), DAYS360_METHODS.EU)).toBe(2131);
    expect(days360(new Date('2030-01-31T00:00'), new Date('2024-02-29T00:00'), DAYS360_METHODS.EXCEL)).toBe(-2131);
    expect(days360(new Date('2030-01-31T00:00'), new Date('2024-02-29T00:00'), DAYS360_METHODS.EU)).toBe(-2131);
    expect(days360(new Date('2018-01-01T00:00'), new Date('2018-01-31T00:00'), DAYS360_METHODS.EXCEL)).toBe(30);
    expect(days360(new Date('2018-02-01T00:00'), new Date('2018-02-28T00:00'), DAYS360_METHODS.EXCEL)).toBe(27);
    // Excel bug can be seen in the following two lines
    expect(days360(new Date('2018-02-28T00:00'), new Date('2024-02-29T00:00'), DAYS360_METHODS.EXCEL)).toBe(2159);
    expect(days360(new Date('2018-02-28T00:00'), new Date('2024-02-29T00:00'), DAYS360_METHODS.US_NASD)).toBe(2160);
  });
  it('Should throw exception when parameters are invalid', () => {
    expect(() => days360(new Date('invalid'), new Date())).toThrow('The function accepts valid dates only!');
    expect(() => days360(new Date(), new Date('invalid'))).toThrow('The function accepts valid dates only!');
  });
});
