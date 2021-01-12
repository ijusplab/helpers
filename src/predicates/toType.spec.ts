import samples from '../../test/_samples';
import toType from './toType';

describe('Testing toType...', () => {
  it('Should describe correctly the types of all samples', () => {
    const from = samples.map((item) => toType(item.value));
    const to = samples.map((item) => item.type);
    expect(from).toEqual(to);
  });
});
