import typeSamples from '../../test/_samples';
import cloneDeep from './cloneDeep';

describe('Testing cloneDeep...', () => {
  it('Should clone an empty object', () => {
    expect(cloneDeep({})).toEqual({});
  });
  it('Should clone all objects in the array of objects', () => {
    const objects: Array<unknown> = [
      {},
      { a: '' },
      { a: { b: { c: { d: [], e: null, f: { g: { h: 1, i: 2, j: '' } } } } } },
      null,
      ['a', 1, null, undefined]
    ];
    objects.forEach((object, index) => {
      expect(cloneDeep(object)).toEqual(objects[index]);
    });
  });
  it('Should clone all other samples as well', () => {
    typeSamples.forEach((object, index) => {
      expect(cloneDeep(object)).toEqual(typeSamples[index]);
    });
  });
  it('Should also clone edge cases', () => {
    const edgeCases: Array<unknown> = [undefined, null, [], NaN, Infinity, '', 0, false];
    edgeCases.forEach((object, index) => {
      expect(cloneDeep(object)).toEqual(edgeCases[index]);
    });
  });
});
