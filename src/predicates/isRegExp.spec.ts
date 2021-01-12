import samples from '../../test/_samples';
import isRegExp from './isRegExp';

describe('Testing isRegExp...', () => {
  it('Should identify only regular expressions from the samples', () => {
    const from = samples.map((item) => isRegExp(item.value));
    const to = samples.map((item) => item.isRegExp === true);
    expect(from).toEqual(to);
  });
});
