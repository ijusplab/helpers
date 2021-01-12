import samples from '../../test/_samples';
import isString from './isString';

describe('Testing isString...', () => {
  it('Should identify only strings from the samples', () => {
    const from = samples.map((item) => isString(item.value));
    const to = samples.map((item) => item.isString === true);
    expect(from).toEqual(to);
  });
});
