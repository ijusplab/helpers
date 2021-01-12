/* eslint-disable @typescript-eslint/no-explicit-any */
import typeSamples from '../../test/_samples';
import isEmptyObject from './isEmptyObject';

const samples = typeSamples as any;

describe('Testing isEmptyObject...', () => {
  it('Should identify only empty arrays values from the samples', () => {
    const from = samples.map((item: any) => isEmptyObject(item.value));
    const to = samples.map((item: any) => item.isEmptyObject === true);
    expect(from).toEqual(to);
  });
});
