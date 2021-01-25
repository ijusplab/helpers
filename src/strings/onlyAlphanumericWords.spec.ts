import onlyAlphanumericWords from './onlyAlphanumericWords';

describe('Testing onlyAlphanumeric...', () => {
  it('Should remove all diacritics and special characters from a string', () => {
    const str = 'Que lembrança darei ao país que me deu\ntudo o que lembro e sei, tudo quanto senti?';
    const res = 'Que lembranca darei ao pais que me deu\ntudo o que lembro e sei tudo quanto senti';
    expect(onlyAlphanumericWords(str)).toBe(res);
  });
  it('Should throw exception if input is not a string', () => {
    // @ts-expect-error Testing for errors now
    expect(() => onlyAlphanumericWords(['1234'])).toThrow('The input must be a string!');
  });
});
