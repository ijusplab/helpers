import normalize from './normalize';

describe('Testing normalize...', () => {
  it('Should remove all diacritics, non-alphanumeric characters and control characters from a string', () => {
    const str = 'Que lembrança darei ao país que me deu\ntudo o que lembro e sei, tudo quanto senti?';
    const res = 'Que lembranca darei ao pais que me deu tudo o que lembro e sei tudo quanto senti';
    expect(normalize(str)).toBe(res);
  });
});
