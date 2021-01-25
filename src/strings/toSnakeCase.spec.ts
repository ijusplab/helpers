import toSnakeCase from './toSnakeCase';

describe('Testing toPascalCase...', () => {
  it('Should remove convert any string to PascalCase', () => {
    const str = 'Que lembrança darei ao país que me deu\ntudo o que lembro e sei, tudo quanto senti?';
    const res = 'que_lembranca_darei_ao_pais_que_me_deu_tudo_o_que_lembro_e_sei_tudo_quanto_senti';
    expect(toSnakeCase(str)).toBe(res);
  });
});
