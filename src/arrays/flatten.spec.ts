import flatten from './flatten';

describe('Testing flatten...', () => {
  const a = [[[1, 'a', 'b'], [3], [2, [[['a'], ['c']]], 3]]];
  const ra = [1, 'a', 'b', 3, 2, 'a', 'c', 3];
  const b = [[[1, null, undefined], [{ a: null }], [2, [[['a'], ['c']]], 3]]];
  const rb = [1, null, undefined, { a: null }, 2, 'a', 'c', 3];
  it('Should flaten an array of any depth, irrespective of the type of its items', () => {
    expect(flatten(a)).toEqual(ra);
    expect(flatten(b)).toEqual(rb);
  });
});
