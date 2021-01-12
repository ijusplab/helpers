import concatUnique from './concatUnique';

describe('Testing concatUnique...', () => {
  const a = [1, 'a', 'b', 3];
  const b = [2, 'a', 'c', 3];
  const c = 'a';
  const d = 4;
  const e = [1, 'a', 'b', 3, 2, 'c', 4];
  it('Should return union of unique elements of the arrays', () => {
    expect(concatUnique(a, b, c, d)).toEqual(e);
    expect(concatUnique(a, [], c)).toEqual(a);
    expect(concatUnique([], b, c)).toEqual(b);
    expect(concatUnique(e, e)).toEqual(e);
    expect(concatUnique(c, d)).toEqual([c, d]);
  });
});
