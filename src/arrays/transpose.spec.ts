import transpose from './transpose';

describe('Testing transpose...', () => {
  // prettier-ignore
  const table = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  ];
  // prettier-ignore
  const transposed = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
    [4, 4, 4],
    [5, 5, 5],
    [6, 6, 6],
    [7, 7, 7],
    [8, 8, 8],
    [9, 9, 9]
  ];
  it('Should transpose a table', () => {
    expect(transpose(table)).toEqual(transposed);
  });
  it('Should throw exception if input is not a table', () => {
    // @ts-expect-error Testing for errors now
    expect(() => transpose([{}])).toThrow('The input must be a table!');
    expect(() => transpose([[], [1, 2]])).toThrow('The input must be a table!');
  });
});
