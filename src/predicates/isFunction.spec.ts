import samples from '../../test/_samples';
import isFunction from './isFunction';

describe('Testing isFunction...', () => {
  it('Should identify only functions from the samples', () => {
    const from = samples.map((item) => isFunction(item.value));
    const to = samples.map((item) => item.isFunction === true);
    expect(from).toEqual(to);
  });
});
