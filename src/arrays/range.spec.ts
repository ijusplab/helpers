import range from './range';

describe('Testing range...', () => {
  it('Should return a valid sequence', () => {
    expect(range(1)).toEqual([0]);
    expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('Shoul return an empty array when zero', () => {
    expect(range(0)).toEqual([]);
  });
});
