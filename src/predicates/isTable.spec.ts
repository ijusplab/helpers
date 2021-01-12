import isTable from './isTable';

describe('Testing isTable...', () => {
  it('Should identify arrays of arrays with items of equal length as tables', () => {
    expect(isTable([[]])).toBe(true);
    expect(isTable([[], [], []])).toBe(true);
    expect(isTable([[1], [2], [3]])).toBe(true);
    expect(
      isTable([
        [1, null],
        [2, ''],
        [3, NaN]
      ])
    ).toBe(true);
  });
  it('Should identify arrays of arrays with items of different length as non tables', () => {
    expect(isTable([[], [null]])).toBe(false);
    expect(isTable([[], [1], []])).toBe(false);
    expect(isTable([[1], [2, 3], [3]])).toBe(false);
    expect(
      isTable([
        [1, null],
        [2, ''],
        [3, NaN, undefined]
      ])
    ).toBe(false);
  });
  it('Should identify arrays of arrays with items of forbidden types as non tables', () => {
    expect(isTable([[{}]])).toBe(false);
    expect(isTable([[], [[]], []])).toBe(false);
    expect(isTable([[1], [2], [{ a: 3 }]])).toBe(false);
    expect(
      isTable([
        [1, null],
        [2, ['']],
        [3, NaN]
      ])
    ).toBe(false);
  });
});
