import toKebabCase from './toKebabCase';

describe('Testing toKebabCase...', () => {
  it('Should remove convert any string to kebab-case', () => {
    const str = 'Que lembrança darei ao país que me deu\ntudo o que lembro e sei, tudo quanto senti?';
    const res = 'que-lembranca-darei-ao-pais-que-me-deu-tudo-o-que-lembro-e-sei-tudo-quanto-senti';
    expect(toKebabCase(str)).toBe(res);
  });
});
