/* eslint-disable @typescript-eslint/no-explicit-any */
import someComplexObject from '../../test/_some-complex-object';
import setValueFromPath from './setValueFromPath';

const sample: any = someComplexObject;

describe('Testing setValueFromPath...', () => {
  it('Should set values corretly in paths like a.b.c, a[0].b.c[2], a[0][1] etc', () => {
    setValueFromPath(sample, 'one.two.three', 'SAY HI!!');
    setValueFromPath(sample, 'one.four[0]', 'SAY HI!!');
    setValueFromPath(sample, 'one.six[0][1]', 'SAY HI!!');
    setValueFromPath(sample, 'one.six[1][2]', 'SAY HI!!');
    setValueFromPath(sample, 'one.two.six', 'SAY HI!!');
    setValueFromPath(sample, 'zeta', 'SAY HI!!');
    setValueFromPath(sample, '1', 'SAY HI!!');
    setValueFromPath(sample, 'ten.eleven', 'SAY HI!!');
    expect(sample.one.two.three).toEqual('SAY HI!!');
    expect(sample.one.four[0]).toEqual('SAY HI!!');
    expect(sample.one.six[0][1]).toEqual('SAY HI!!');
    expect(sample.one.six[1][2]).toEqual('SAY HI!!');
    expect(sample.one.two.six).toEqual('SAY HI!!');
    expect(sample.zeta).toEqual('SAY HI!!');
    expect(sample[1] as any).toEqual('SAY HI!!');
    expect(sample.ten).toEqual(undefined);
  });
});
