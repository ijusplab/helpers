import zip from './zip';

describe('Testing zip...', () => {
  const a = [
    [1, 2, 3, null],
    ['a', 'b', 'c', undefined],
    [true, false, true, null]
  ];
  const ra = [
    [1, 'a', true],
    [2, 'b', false],
    [3, 'c', true],
    ['', '', '']
  ];
  const b = [
    [1, 2, 3, 4],
    ['a', 'b', 'c'],
    [true, false, true]
  ];
  const rb = [
    [1, 'a', true],
    [2, 'b', false],
    [3, 'c', true],
    [4, '', '']
  ];
  const c = [[1], ['a'], [true]];
  const rc = [[1, 'a', true]];
  const d = [[1, 2, 3, 4], ['a']];
  const rd = [
    [1, 'a'],
    [2, ''],
    [3, ''],
    [4, '']
  ];
  const e = [[1, 2, 3, 4], ['a']];
  const re = [
    [1, 'a'],
    [2, 'b'],
    [3, 'b'],
    [4, 'b']
  ];

  const f = [['a'], [1, 2, 3, 4]];
  const rf = [
    ['a', 1],
    ['b', 2],
    ['b', 3],
    ['b', 4]
  ];

  it('Should zip the, irrespective of the type of its items, replacing undefineds and nulls with empty strings', () => {
    expect(zip(a)).toEqual(ra);
    expect(zip(c)).toEqual(rc);
  });
  it('Should fill blanks with empty string, if no other value is provided', () => {
    expect(zip(b)).toEqual(rb);
    expect(zip(d)).toEqual(rd);
  });
  it('Should fill blanks with provided value', () => {
    expect(zip(e, 'b')).toEqual(re);
    expect(zip(f, 'b')).toEqual(rf);
  });
});
