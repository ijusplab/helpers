import isBefore from './isBefore';

describe('Testing isBefore...', () => {
  it('Should inform correctly if the date is before another date', () => {
    expect(isBefore(new Date('1806-01-01'), new Date('1805-01-01'))).toBe(false);
    expect(isBefore(new Date('1826-01-01'), new Date('1825-01-01'))).toBe(false);
    expect(isBefore(new Date('1918-01-01'), new Date('1805-01-01'))).toBe(false);
    expect(isBefore(new Date('2026-01-01'), new Date('1805-01-01'))).toBe(false);
    expect(isBefore(new Date('2082-01-01'), new Date('2400-01-01'))).toBe(true);
    expect(isBefore(new Date('2126-01-01'), new Date('2400-01-01'))).toBe(true);
    expect(isBefore(new Date('2334-01-01'), new Date('2400-01-01'))).toBe(true);
    expect(isBefore(new Date('2398-01-01'), new Date('2400-01-01'))).toBe(true);
  });
  it('Should throw exceptions when date is invalid', () => {
    expect(() => isBefore(new Date(), new Date('invalid'))).toThrow('Invalid date!');
  });
});
