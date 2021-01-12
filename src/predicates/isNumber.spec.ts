import samples from '../../test/_samples';
import isNumber from './isNumber';

describe('Testing isNumber...', () => {
  it('Should identify only numbers from the samples', () => {
    const from = samples.map((item) => isNumber(item.value));
    const to = samples.map((item) => item.isNumber === true);
    expect(from).toEqual(to);
  });
  it('Should identify 0, 1, -10, 1.2, -1.3 as numbers', () => {
    expect([0, 1, -10, 1.2, -1.3].every(isNumber)).toEqual(true);
  });
  it('Should identify NaN, Infinity, null, undefined, false, true as non numbers', () => {
    expect([NaN, Infinity, null, undefined, false, true].every(isNumber)).toEqual(false);
  });
});
