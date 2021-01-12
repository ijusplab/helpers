import samples from '../../test/_samples';
import isDate from './isDate';

describe('Testing isDate...', () => {
  it('Should identify only dates from the samples', () => {
    const from = samples.map((item) => isDate(item.value));
    const to = samples.map((item) => item.isDate === true);
    expect(from).toEqual(to);
  });
});
