import isValidDate from './isValidDate';

describe('Testing isValidDate...', () => {
  it('Should test true for regular date objects', () => {
    expect(isValidDate(new Date())).toBe(true);
  });
  it('Should test false for malformed ones', () => {
    expect(isValidDate(new Date(''))).toBe(false);
    expect(isValidDate(new Date('invalid'))).toBe(false);
  });
});
