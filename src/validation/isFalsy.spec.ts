/* eslint-disable @typescript-eslint/no-explicit-any */
import typeSamples from '../../test/_samples';
import isFalsy from './isFalsy';

const samples = typeSamples as any;

describe('Testing isFalsy...', () => {
  it('Should identify only falsy values from the samples', () => {
    const from = samples.map((item: any) => isFalsy(item.value));
    const to = samples.map((item: any) => item.isFalsy === true);
    expect(from).toEqual(to);
  });
});
