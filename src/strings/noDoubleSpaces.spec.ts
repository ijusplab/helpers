import noDoubleSpaces from './noDoubleSpaces';

describe('Testing noDoubleSpaces...', () => {
  it('Should remove all spaces in excess from a string', () => {
    const str = ' Que   lembrança darei ao país que me deu\n tudo o que lembro e sei, tudo quanto senti?  ';
    const res = 'Que lembrança darei ao país que me deu tudo o que lembro e sei, tudo quanto senti?';
    expect(noDoubleSpaces(str)).toBe(res);
  });
  it('Should throw exception if input is not a string', () => {
    // @ts-expect-error Testing for errors now
    expect(() => noDoubleSpaces(123)).toThrow('The input must be a string!');
  });
});
