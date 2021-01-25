import toPascalCase from './toPascalCase';

describe('Testing toPascalCase...', () => {
  it('Should remove convert any string to PascalCase', () => {
    const str = 'Que lembrança darei ao país que me deu\ntudo o que lembro e sei, tudo quanto senti?';
    const res = 'QueLembrancaDareiAoPaisQueMeDeuTudoOQueLembroESeiTudoQuantoSenti';
    expect(toPascalCase(str)).toBe(res);
  });
});
