import someComplexObject from '../../test/_some-complex-object';
import getValueFromPath from './getValueFromPath';

describe('Testing getValueFromPath...', () => {
  it('Should get values correctly from paths like a.b.c, a[0].b.c[2], a[0][1] etc', () => {
    const value1 = getValueFromPath(someComplexObject, 'one.two.three');
    const value2 = getValueFromPath(someComplexObject, 'one.four[0]');
    const value3 = getValueFromPath(someComplexObject, 'one.six[0][1]');
    const value4 = getValueFromPath(someComplexObject, 'one.six[1][2]');
    const value5 = getValueFromPath(someComplexObject, 'one.two.six');
    const value6 = getValueFromPath(someComplexObject, 'zeta');
    const value7 = getValueFromPath(someComplexObject, '1');
    expect(value1).toEqual('got it!');
    expect(value2).toEqual('inside array!');
    expect(value3).toEqual('y');
    expect(value4).toEqual(null);
    expect(value5).toEqual(undefined);
    expect(value6).toEqual(undefined);
    expect(value7).toEqual(undefined);
  });
  it('Should throw exception when path is invalid', () => {
    expect(() => getValueFromPath(someComplexObject, '.2.3-4')).toThrow('Invalid path!');
  });
});
