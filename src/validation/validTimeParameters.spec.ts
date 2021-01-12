import validTimeParameters from './validTimeParameters';

describe('Testing validDateParameters...', () => {
  it('Shoud test true for trivial valid dates', () => {
    expect(validTimeParameters(23, 30, 29, 260)).toBe(true);
    expect(validTimeParameters(23, 59, 59, 999)).toBe(true);
    expect(validTimeParameters(0, 0, 0, 0)).toBe(true);
  });
  it('Should test false for invalid hours', () => {
    //@ts-expect-error Testing for errors now
    expect(validTimeParameters('23', 0, 0, 0)).toBe(false);
    expect(validTimeParameters(-1, 0, 0, 0)).toBe(false);
    expect(validTimeParameters(24, 0, 0, 0)).toBe(false);
  });
  it('Should test false for invalid minutes', () => {
    //@ts-expect-error Testing for errors now
    expect(validTimeParameters(0, '30', 0, 0)).toBe(false);
    expect(validTimeParameters(0, -1, 0, 0)).toBe(false);
    expect(validTimeParameters(0, 60, 0, 0)).toBe(false);
  });
  it('Should test false for invalid seconds', () => {
    //@ts-expect-error Testing for errors now
    expect(validTimeParameters(0, 0, '30', 0)).toBe(false);
    expect(validTimeParameters(0, 0, -1, 0)).toBe(false);
    expect(validTimeParameters(0, 0, 60, 0)).toBe(false);
  });
  it('Should test false for invalid milliseconds', () => {
    //@ts-expect-error Testing for errors now
    expect(validTimeParameters(0, 0, 0, '100')).toBe(false);
    expect(validTimeParameters(0, 0, 0, -1)).toBe(false);
    expect(validTimeParameters(0, 0, 0, 1000)).toBe(false);
  });
});
