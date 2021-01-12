import filterUnique from './filterUnique';
import range from './range';

describe('Testing unique...', () => {
  const sample1 = [new Date(2020, 0, 1), 0, 1, 'a', 'b', 'c', 'd', 0, 'b', new Date(2020, 0, 1)];
  const result1 = [new Date(2020, 0, 1), 0, 1, 'a', 'b', 'c', 'd'];
  const sample2 = range(10);
  const result2 = range(10);

  it('Should return only unique items', () => {
    expect(sample1.filter(filterUnique)).toEqual(result1);
    expect(sample2.filter(filterUnique)).toEqual(result2);
  });
  it('Should return an empty array when an empty array is given', () => {
    expect([].filter(filterUnique)).toEqual([]);
  });
});
