import CDate from './CDate';
import { DURATION_TYPES } from '../enums';

describe('Testing CDate...', () => {
  it('Shoud corretly instantiate valid dates when receiving valid parameteres', () => {
    expect(new CDate(1900, 0, 1).isValid()).toBe(true);
    expect(new CDate(1900, 0).isValid()).toBe(true);
    expect(new CDate(2020, 1, 29).isValid()).toBe(true);
    expect(new CDate(2021, 1, 29).isValid()).toBe(false);
    expect(new CDate('2020-01-01').isValid()).toBe(true);
    expect(new CDate('2022-02-29').isValid()).toBe(false);
    expect(new CDate('2021-01-06T00:40:56.321Z').isValid()).toBe(true);
    expect(new CDate('2021-02-30T00:40:56.321Z').isValid()).toBe(false);
    expect(new CDate().isValid()).toBe(true);
    expect(new CDate(new Date()).isValid()).toBe(true);
    expect(new CDate(new Date('invalid')).isValid()).toBe(false);
  });
  it('Should correctly convert strings to date', () => {
    expect(CDate.stringToDate('2021-01-06T05:57:20.154Z')).toEqual(new Date('2021-01-06T05:57:20.154Z'));
    expect(CDate.stringToDate('2021-01-06')).toEqual(new Date('2021-01-06T00:00'));
    expect(CDate.stringToDate('06-01-2021', 'pt-BR')).toEqual(new Date('2021-01-06T00:00'));
    expect(CDate.stringToDate('06.01.2021', 'pt-BR')).toEqual(new Date('2021-01-06T00:00'));
    expect(CDate.stringToDate('06/01/2021', 'pt-BR')).toEqual(new Date('2021-01-06T00:00'));
    expect(CDate.stringToDate('01-2021', 'pt-BR')).toEqual(new Date('2021-01-01T00:00'));
    expect(CDate.stringToDate('01.2021', 'pt-BR')).toEqual(new Date('2021-01-01T00:00'));
    expect(CDate.stringToDate('01/2021', 'pt-BR')).toEqual(new Date('2021-01-01T00:00'));
    expect(CDate.stringToDate('01/21', 'pt-BR')).toEqual(new Date('1921-01-01T00:00'));
    expect(CDate.stringToDate('01-06-2021', 'en-US')).toEqual(new Date('2021-01-06T00:00'));
  });
  it('Should throw errors when parameters for convertion are invalid', () => {
    // @ts-expect-error Testing for errors now
    expect(() => CDate.stringToDate(new Date())).toThrow('The function accepts strings only!');
    expect(() => CDate.stringToDate('001/01/2020', 'pt-BR')).toThrow('Invalid date string!');
    expect(() => CDate.stringToDate('31/02/2020', 'pt-BR')).toThrow('Invalid date: 2020-02-31!');
  });
  it('Should inform correctly any given leap year', () => {
    expect(new CDate(1804, 1, 1).isLeapYear()).toBe(true);
    expect(new CDate(1824, 1, 1).isLeapYear()).toBe(true);
    expect(new CDate(1916, 1, 1).isLeapYear()).toBe(true);
    expect(new CDate(2024, 1, 1).isLeapYear()).toBe(true);
    expect(new CDate(2080, 1, 1).isLeapYear()).toBe(true);
    expect(new CDate(2124, 1, 1).isLeapYear()).toBe(true);
    expect(new CDate(2332, 1, 1).isLeapYear()).toBe(true);
    expect(new CDate(2396, 1, 1).isLeapYear()).toBe(true);
  });
  it('Should inform correctly any given non leap year', () => {
    expect(new CDate(1806, 1, 1).isLeapYear()).toBe(false);
    expect(new CDate(1826, 1, 1).isLeapYear()).toBe(false);
    expect(new CDate(1918, 1, 1).isLeapYear()).toBe(false);
    expect(new CDate(2026, 1, 1).isLeapYear()).toBe(false);
    expect(new CDate(2082, 1, 1).isLeapYear()).toBe(false);
    expect(new CDate(2126, 1, 1).isLeapYear()).toBe(false);
    expect(new CDate(2334, 1, 1).isLeapYear()).toBe(false);
    expect(new CDate(2398, 1, 1).isLeapYear()).toBe(false);
  });
  it('Should inform correctly if the date is after another date', () => {
    expect(new CDate('1806-01-01').isAfter(new Date('1805-01-01T00:00'))).toBe(true);
    expect(new CDate('1826-01-01').isAfter(new Date('1825-01-01T00:00'))).toBe(true);
    expect(new CDate('1918-01-01').isAfter(new Date('1805-01-01T00:00'))).toBe(true);
    expect(new CDate('2026-01-01').isAfter(new Date('1805-01-01T00:00'))).toBe(true);
    expect(new CDate('2082-01-01').isAfter(new Date('2400-01-01T00:00'))).toBe(false);
    expect(new CDate('2126-01-01').isAfter(new Date('2400-01-01T00:00'))).toBe(false);
    expect(new CDate('2334-01-01').isAfter(new Date('2400-01-01T00:00'))).toBe(false);
    expect(new CDate('2398-01-01').isAfter(new Date('2400-01-01T00:00'))).toBe(false);
  });
  it('Should inform correctly if the date is before another date', () => {
    expect(new CDate('1806-01-01').isBefore(new Date('1805-01-01T00:00'))).toBe(false);
    expect(new CDate('1826-01-01').isBefore(new Date('1825-01-01T00:00'))).toBe(false);
    expect(new CDate('1918-01-01').isBefore(new Date('1805-01-01T00:00'))).toBe(false);
    expect(new CDate('2026-01-01').isBefore(new Date('1805-01-01T00:00'))).toBe(false);
    expect(new CDate('2082-01-01').isBefore(new Date('2400-01-01T00:00'))).toBe(true);
    expect(new CDate('2126-01-01').isBefore(new Date('2400-01-01T00:00'))).toBe(true);
    expect(new CDate('2334-01-01').isBefore(new Date('2400-01-01T00:00'))).toBe(true);
    expect(new CDate('2398-01-01').isBefore(new Date('2400-01-01T00:00'))).toBe(true);
  });
  it('Should inform correctly if the date is between two other dates', () => {
    expect(new CDate('1806-01-01').isBetween(new Date('1805-01-01T00:00'), new Date('1807-01-01T00:00'))).toBe(true);
    expect(new CDate('1905-01-01').isBetween(new Date('1904-01-01T00:00'), new Date('2000-01-01T00:00'))).toBe(true);
    expect(new CDate('2001-01-01').isBetween(new Date('1999-01-01T00:00'), new Date('2021-01-01T00:00'))).toBe(true);
    expect(new CDate('2020-02-20').isBetween(new Date('2020-02-19T00:00'), new Date('2020-02-21T00:00'))).toBe(true);
    expect(new CDate('2020-02-20').isBetween(new Date('2020-02-21T00:00'), new Date('2020-02-19T00:00'))).toBe(true);
    expect(new CDate('2020-02-21').isBetween(new Date('2020-02-19T00:00'), new Date('2020-02-21T00:00'))).toBe(false);
    expect(new CDate('2020-02-19').isBetween(new Date('2020-02-19T00:00'), new Date('2020-02-20T00:00'))).toBe(false);
  });
  it('Should inform correctly if the date is equal to another', () => {
    expect(new CDate('1806-01-01').sameAs(new Date('1806-01-01T00:00'))).toBe(true);
    expect(new CDate('1806-01-01').sameAs(new Date('1806-02-01T00:00'))).toBe(false);
  });
  it('Should corretly return addition and subtractions', () => {
    expect(new CDate('2020-01-01').add(5, DURATION_TYPES.YEARS).getNative()).toEqual(new Date('2025-01-01T00:00'));
    expect(new CDate('2020-01-01').add(-5, DURATION_TYPES.YEARS).getNative()).toEqual(new Date('2015-01-01T00:00'));
    expect(new CDate('2020-01-01').add(5, DURATION_TYPES.MONTHS).getNative()).toEqual(new Date('2020-06-01T00:00'));
    expect(new CDate('2020-01-01').add(-5, DURATION_TYPES.MONTHS).getNative()).toEqual(new Date('2019-08-01T00:00'));
    expect(new CDate('2020-01-01').add(5, DURATION_TYPES.DAYS).getNative()).toEqual(new Date('2020-01-06T00:00'));
    expect(new CDate('2020-01-01').add(-5, DURATION_TYPES.DAYS).getNative()).toEqual(new Date('2019-12-27T00:00'));
    expect(new CDate('2020-01-01').add(1, DURATION_TYPES.WEEKS).getNative()).toEqual(new Date('2020-01-08T00:00'));
    expect(new CDate('2020-01-01').add(-1, DURATION_TYPES.WEEKS).getNative()).toEqual(new Date('2019-12-25T00:00'));
    expect(new CDate('2020-01-01').add(5, DURATION_TYPES.HOURS).getNative()).toEqual(new Date('2020-01-01T05:00'));
    expect(new CDate('2020-01-01').add(-5, DURATION_TYPES.HOURS).getNative()).toEqual(new Date('2019-12-31T19:00'));
    expect(new CDate('2020-01-01').add(61, DURATION_TYPES.MINUTES).getNative()).toEqual(new Date('2020-01-01T01:01'));
    expect(new CDate('2020-01-01').add(-61, DURATION_TYPES.MINUTES).getNative()).toEqual(new Date('2019-12-31T22:59'));
    expect(new CDate('2020-01-01').add(61, DURATION_TYPES.SECONDS).getNative()).toEqual(new Date(2020, 0, 1, 0, 1, 1));
    expect(new CDate('2020-01-01').add(-61, DURATION_TYPES.SECONDS).getNative()).toEqual(
      new Date(2019, 11, 31, 23, 58, 59)
    );
  });
  it('Should nicely inform durations from now', () => {
    const seconds = new Date();
    seconds.setSeconds(seconds.getSeconds() + 60);
    const minutes = new Date();
    minutes.setMinutes(minutes.getMinutes() + 10);
    const days = new Date();
    days.setDate(days.getDate() + 10);
    expect(new CDate(seconds).setLocale('pt-BR').fromNow()).toMatch(/há\s\d+\ssegundos/);
    expect(new CDate(minutes).setLocale('pt-BR').fromNow(DURATION_TYPES.MINUTES)).toMatch(/há\s\d+\sminutos/);
    expect(new CDate(days).setLocale('pt-BR').fromNow(DURATION_TYPES.DAYS)).toMatch(/há\s\d+\sdias/);
  });
  it('Should convert nicely to string', () => {
    const date = new CDate('2020-01-01').setLocale('pt-BR').setTimezone('America/Sao_Paulo');
    expect(date.toString()).toEqual('2020-01-01');
    expect(date.toISOString()).toEqual('2020-01-01T03:00:00.000Z');
    expect(date.toLocaleString()).toEqual('01/01/2020');
    expect(date.humanized()).toEqual('1 de janeiro de 2020');
  });
  it('Should return the user locale', () => {
    expect(new CDate(2020, 1, 1).getLocale()).toBe(Intl.DateTimeFormat().resolvedOptions().locale);
  });
  it('Should return the user timezone', () => {
    expect(new CDate(2020, 1, 1).getTimezone()).toBe(Intl.DateTimeFormat().resolvedOptions().timeZone);
  });
  it('Should return the native Date object', () => {
    expect(new CDate(2020, 0, 1, 23, 59, 1, 1).getNative()).toEqual(new Date(2020, 0, 1, 23, 59, 1, 1));
  });
  it('Should throw exceptions when date is invalid', () => {
    expect(() => new CDate(new Date('invalid')).isLeapYear()).toThrow('Invalid date!');
    expect(() => new CDate(new Date('invalid')).isAfter(new Date())).toThrow('Invalid date!');
    expect(() => new CDate(new Date('invalid')).isBefore(new Date())).toThrow('Invalid date!');
    expect(() => new CDate(new Date('invalid')).isBetween(new Date(), new Date())).toThrow('Invalid date!');
    expect(() => new CDate(new Date('invalid')).sameAs(new Date())).toThrow('Invalid date!');
    expect(() => new CDate(new Date('invalid')).add(2)).toThrow('Invalid date!');
    expect(() => new CDate(new Date('invalid')).fromNow()).toThrow('Invalid date!');
    expect(() => new CDate(new Date('invalid')).toString()).toThrow('Invalid date!');
    expect(() => new CDate(new Date('invalid')).toISOString()).toThrow('Invalid date!');
    expect(() => new CDate(new Date('invalid')).toLocaleString()).toThrow('Invalid date!');
    expect(() => new CDate(new Date('invalid')).humanized()).toThrow('Invalid date!');
  });
});
