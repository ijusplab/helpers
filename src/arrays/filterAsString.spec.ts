import filterAsString from './filterAsString';

describe('Testing filterAsString...', () => {
  const data = [
    { a: 'one is a word', x: null, y: undefined, z: NaN },
    { b: 'two is a word' },
    { c: new Date('2020-01-01') },
    { d: ['three', 4, null, undefined] }
  ];
  it('Should filter an array of objects when given a string', () => {
    expect(filterAsString(data, 'two')).toEqual([data[1]]);
    expect(filterAsString(data, 'one')).toEqual([data[0]]);
    expect(filterAsString(data, 'three')).toEqual([data[3]]);
    expect(filterAsString(data, '01/01/2020')).toEqual([data[2]]);
    expect(filterAsString(data, '')).toEqual(data);
    // @ts-expect-error Testing for errors now
    expect(() => filterAsString('', '')).toThrow('First argument must be an array!');
    // @ts-expect-error Testing for errors now
    expect(() => filterAsString([])).toThrow('Second argument must be a string!');
  });
  it('Should return empty array when nothing to filter or when the filter does not match', () => {
    expect(filterAsString(data, 'five')).toEqual([]);
    expect(filterAsString([undefined, undefined], 'teste')).toEqual([]);
  });
});
