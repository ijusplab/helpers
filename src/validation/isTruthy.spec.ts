/* eslint-disable @typescript-eslint/no-explicit-any */
import typeSamples from '../../test/_samples';
import isTruthy from './isTruthy';

const samples = typeSamples as any;

describe('Testing isTruthy...', () => {
  it('Should identify only truthy values from the samples', () => {
    const from = samples.map((item: any) => isTruthy(item.value));
    const to = samples.map((item: any) => item.isTruthy === true);
    expect(from).toEqual(to);
  });
});
