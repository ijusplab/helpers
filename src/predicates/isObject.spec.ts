import samples from '../../test/_samples';
import isObject from './isObject';

describe('Testing isObject...', () => {
  it('Should identify only objects from the samples', () => {
    const from = samples.map((item) => isObject(item.value));
    const to = samples.map((item) => item.isObject === true);
    expect(from).toEqual(to);
  });
});
