/* eslint-disable @typescript-eslint/no-explicit-any */
import typeSamples from '../../test/_samples';
import isEmptyArray from './isEmptyArray';

const samples = typeSamples as any;

describe('Testing isEmptyArray...', () => {
  it('Should identify only empty arrays values from the samples', () => {
    const from = samples.map((item: any) => isEmptyArray(item.value));
    const to = samples.map((item: any) => item.isEmptyArray === true);
    expect(from).toEqual(to);
  });
});
