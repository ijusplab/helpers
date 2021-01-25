import noCurlyQuotes from './noCurlyQuotes';

describe('Testing noCurlyQuotes...', () => {
  it('Should remove most common control characters from a string', () => {
    const str = '“Que lembrança darei ao país que me deu\ntudo o que lembro e sei, tudo quanto senti?”';
    const res = '"Que lembrança darei ao país que me deu\ntudo o que lembro e sei, tudo quanto senti?"';
    expect(noCurlyQuotes(str)).toBe(res);
  });
  it('Should throw exception if input is not a string', () => {
    // @ts-expect-error Testing for errors now
    expect(() => noCurlyQuotes(NaN)).toThrow('The input must be a string!');
  });
});
