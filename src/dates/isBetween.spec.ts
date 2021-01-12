import isBetween from './isBetween';

describe('Testing isBetween...', () => {
  it('Should inform correctly if the date is between two other dates', () => {
    expect(isBetween(new Date('1806-01-01'), new Date('1805-01-01'), new Date('1807-01-01'))).toBe(true);
    expect(isBetween(new Date('1905-01-01'), new Date('1904-01-01'), new Date('2000-01-01'))).toBe(true);
    expect(isBetween(new Date('2001-01-01'), new Date('1999-01-01'), new Date('2021-01-01'))).toBe(true);
    expect(isBetween(new Date('2020-02-20'), new Date('2020-02-19'), new Date('2020-02-21'))).toBe(true);
    expect(isBetween(new Date('2020-02-20'), new Date('2020-02-21'), new Date('2020-02-19'))).toBe(true);
    expect(isBetween(new Date('2020-02-21'), new Date('2020-02-19'), new Date('2020-02-21'))).toBe(false);
    expect(isBetween(new Date('2020-02-19'), new Date('2020-02-19'), new Date('2020-02-20'))).toBe(false);
  });
});
