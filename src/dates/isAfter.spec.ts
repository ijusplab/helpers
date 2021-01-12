import isAfter from './isAfter';

describe('Testing isAfter...', () => {
  it('Should inform correctly if the date is after another date', () => {
    expect(isAfter(new Date('1806-01-01'), new Date('1805-01-01'))).toBe(true);
    expect(isAfter(new Date('1826-01-01'), new Date('1825-01-01'))).toBe(true);
    expect(isAfter(new Date('1918-01-01'), new Date('1805-01-01'))).toBe(true);
    expect(isAfter(new Date('2026-01-01'), new Date('1805-01-01'))).toBe(true);
    expect(isAfter(new Date('2082-01-01'), new Date('2400-01-01'))).toBe(false);
    expect(isAfter(new Date('2126-01-01'), new Date('2400-01-01'))).toBe(false);
    expect(isAfter(new Date('2334-01-01'), new Date('2400-01-01'))).toBe(false);
    expect(isAfter(new Date('2398-01-01'), new Date('2400-01-01'))).toBe(false);
  });
  it('Should throw exceptions when date is invalid', () => {
    expect(() => isAfter(new Date(), new Date('invalid'))).toThrow('Invalid date!');
  });
});
