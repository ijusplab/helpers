import stringToDate from './stringToDate';

describe('Testing stringToDate...', () => {
  it('Should correctly convert strings to date', () => {
    expect(stringToDate('2021-01-06T05:57:20.154Z')).toEqual(new Date('2021-01-06T05:57:20.154Z'));
    expect(stringToDate('2021-01-06')).toEqual(new Date('2021-01-06T00:00'));
    expect(stringToDate('06-01-2021', 'pt-BR')).toEqual(new Date('2021-01-06T00:00'));
    expect(stringToDate('06.01.2021', 'pt-BR')).toEqual(new Date('2021-01-06T00:00'));
    expect(stringToDate('06/01/2021', 'pt-BR')).toEqual(new Date('2021-01-06T00:00'));
    expect(stringToDate('01-2021', 'pt-BR')).toEqual(new Date('2021-01-01T00:00'));
    expect(stringToDate('01.2021', 'pt-BR')).toEqual(new Date('2021-01-01T00:00'));
    expect(stringToDate('01/2021', 'pt-BR')).toEqual(new Date('2021-01-01T00:00'));
    expect(stringToDate('01/21', 'pt-BR')).toEqual(new Date('1921-01-01T00:00'));
    expect(stringToDate('01-06-2021', 'en-US')).toEqual(new Date('2021-01-06T00:00'));
  });
  it('Should throw errors when parameters for convertion are invalid', () => {
    // @ts-expect-error Testing for errors now
    expect(() => stringToDate(new Date())).toThrow('The function accepts strings only!');
    expect(() => stringToDate('00-00-0000', 'pt-BR')).toThrow('Invalid date string!');
    expect(() => stringToDate('001/01/2020')).toThrow('Invalid date string!');
    expect(() => stringToDate('31/02/2020', 'pt-BR')).toThrow('Invalid date: 2020-02-31!');
  });
});
