/* eslint-disable @typescript-eslint/no-explicit-any */
import typeSamples from '../../test/_samples';
import isNonEmptyString from './isNonEmptyString';

const samples = typeSamples as any;

describe('Testing isNonEmptyString...', () => {
  it('Should identify only non-empty strings from the samples', () => {
    const from = samples.map((item: any) => isNonEmptyString(item.value));
    const to = samples.map((item: any) => item.isNonEmptyString === true);
    expect(from).toEqual(to);
  });
});
