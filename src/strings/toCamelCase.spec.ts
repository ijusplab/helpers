import toCamelCase from './toCamelCase';

describe('Testing toCamelCase...', () => {
  it('Should remove convert any string to camelCase', () => {
    const str = 'Que lembrança darei ao país que me deu\ntudo o que lembro e sei, tudo quanto senti?';
    const res = 'queLembrancaDareiAoPaisQueMeDeuTudoOQueLembroESeiTudoQuantoSenti';
    expect(toCamelCase(str)).toBe(res);
  });
});
