import samples from '../../test/_samples';
import isBoolean from './isBoolean';

describe('Testing isBoolean...', () => {
  it('Should identify only booleans from the samples', () => {
    const from = samples.map((item) => isBoolean(item.value));
    const to = samples.map((item) => item.isBoolean === true);
    expect(from).toEqual(to);
  });
});
