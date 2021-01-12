/* eslint-disable @typescript-eslint/no-explicit-any */
import cropClone from './cropClone';

describe('Testing cropClone...', () => {
  it('Should clone an empty object', () => {
    expect(cropClone({}, { a: null })).toEqual({});
  });
  it('Should clone only properties found in the reference object (given as second parameter)', () => {
    let target: any = { a: null, b: null, c: null };
    const refs: any = [{ a: null }, { b: null }, { c: null }, { d: null }];
    expect(cropClone(target, refs[0])).toEqual({ a: null });
    target = { a: null, b: [1, 2, 3], c: null };
    expect(cropClone(target, refs[1])).toEqual({ b: [1, 2, 3] });
    target = { a: null, b: null, c: { d: [{ e: 'test' }] } };
    expect(cropClone(target, refs[2])).toEqual({ c: { d: [{ e: 'test' }] } });
    target = { a: null, b: null, c: { d: [{ e: 'test' }] } };
    expect(cropClone(target, refs[3])).toEqual({});
  });
});
