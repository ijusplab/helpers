import intersection from './intersection';

describe('Testing intersection...', () => {
  const a = [[1, [['a', 'b'], [3]]]];
  const b = [
    [2, 'a'],
    [['c'], 3]
  ];
  const c = 'a';
  const d = 4;
  const e = [1, 'a', 'b', 3, 2, 'c', 4];
  it('Should return union of unique elements of the arrays', () => {
    expect(intersection(a, b, c, d)).toEqual([]);
    expect(intersection(a, [])).toEqual([]);
    expect(intersection(a, b)).toEqual(['a', 3]);
    expect(intersection(b, c)).toEqual(['a']);
    expect(intersection(d, e)).toEqual([4]);
  });
});
