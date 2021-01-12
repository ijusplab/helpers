/* eslint-disable @typescript-eslint/no-explicit-any */
import typeSamples from '../../test/_samples';
import isNumeric from './isNumeric';

const samples = typeSamples as any;

describe('Testing isNumeric...', () => {
  it('Should identify only numeric values from the samples', () => {
    const from = samples.map((item: any) => isNumeric(item.value));
    const to = samples.map((item: any) => item.isNumeric === true);
    expect(from).toEqual(to);
  });
  it('Should identify 0, 1, -1, -1.2, 10.5 and their string versions as numeric', () => {
    expect([0, 1, -1, -1.2, 10.5, '0', '1', '-1', '-1.2', '10.5'].every(isNumeric)).toEqual(true);
  });
  it('Should identify 0f, 1000f, 1h40, null, undefined, NaN and Infinity as non numeric', () => {
    expect(['0f', '1000f', '1h40', null, undefined, NaN, Infinity].every(isNumeric)).toEqual(false);
  });
});
