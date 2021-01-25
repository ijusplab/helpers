import noSpaces from './noSpaces';

describe('Testing noSpaces...', () => {
  it('Should remove all spaces from a string', () => {
    const str = 'Que lembrança darei ao país que me deu\ntudo o que lembro e sei, tudo quanto senti?';
    const res = 'Quelembrançadareiaopaísquemedeutudooquelembroesei,tudoquantosenti?';
    expect(noSpaces(str)).toBe(res);
  });
  it('Should throw exception if input is not a string', () => {
    // @ts-expect-error Testing for errors now
    expect(() => noSpaces(123)).toThrow('The input must be a string!');
  });
});
