import getValueWithPattern from './getValueWithPattern';

describe('Testing getValueWithPattern...', () => {
  it('Should remove most common control characters from a string', () => {
    const str = 'Que lembrança darei ao país que me deu\ntudo o que lembro e sei, tudo quanto senti?';
    expect(getValueWithPattern(str, /^.*?(que me deu\n)/g)).toBe('que me deu\n');
    expect(getValueWithPattern(str, /^.*?que me deu\n/g)).toBe('Que lembrança darei ao país que me deu\n');
  });
  it('Should throw exception if input is not a string', () => {
    // @ts-expect-error Testing for errors now
    expect(() => getValueWithPattern(NaN)).toThrow('The input must be a string!');
    // @ts-expect-error Testing for errors now
    expect(() => getValueWithPattern('', '')).toThrow('The pattern must be a regular expression!');
  });
});
