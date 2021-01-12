import isLeapYear from './isLeapYear';
import isAfter from './isAfter';
import isBefore from './isBefore';
import isBetween from './isBetween';
import isSameDate from './isSameDate';
import durationFromNow from './durationFromNow';
import stringToDate from './stringToDate';
import dateToString from './dateToString';
import { getUserLocale, getUserTimeZone } from '../locale';
import { isString } from '../predicates';
import { isValidDate, validDateParameters, validTimeParameters } from '../validation';
import { DATE_INPUT_FORMATS, DATE_OUTPUT_FORMATS, DURATION_TYPES } from '../enums';

/**
 * Convenience wrapper for the native Date object.
 *
 * Example:
 * ```
 * console.log(new CDate('2020-01-01').setLocale('pt-BR').humanized());
 * // Output: 1 de janeiro de 2020
 * ```
 */
export default class CDate {
  private date: Date | undefined;
  private valid = false;
  private locale: string = getUserLocale();
  private timezone: string = getUserTimeZone();

  /**
   * When no argument is passed to the constructor, creates the underlying native date with `new Date()`.
   */
  constructor();
  /**
   * When a native date object is passed to the constructor, it is kept untouched.
   *
   * @param value
   */
  constructor(value: Date);
  /**
   * When a string is passed to the constructor, the expected behaviour is the following:
   * - if the input string a full ISO-8061 string, it is converted as is by the native `Date` constructor after cheking if date and time are valid
   * - if the input string is a short ISO-8061 string (i.e. in the format `YYYY-MM-DD`), it is passed as `YYYY-MM-DDT00:00` to the native contructor (after validation) so as to ensure that it will be interpreted as in the local timezone, not in UTC
   * - otherwise, the input string must meet any of the formats defined in the `DATE_INPUT_FORMATS` enumeration
   *
   * @param dateString
   */
  constructor(dateString: string);
  /**
   * When numbers are passed to the constructor, they are validated before being passed to the native `Date` constructor.
   * So, differently from the native object's beheviour, parameters like `new CDate(2020, 1, 30)` or `new CDate(2020, 12, 31)` are not accepted as valid.
   *
   * @param year
   * @param monthIndex
   * @param day
   * @param hours
   * @param minutes
   * @param seconds
   * @param milliseconds
   */
  constructor(
    year: number,
    monthIndex: number,
    day?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    milliseconds?: number
  );
  constructor(...args: unknown[]) {
    if (args.length === 0) {
      this.date = new Date();
      this.valid = isValidDate(this.date);
    }
    if (args.length === 1) {
      if (isValidDate(args[0])) {
        this.date = args[0];
        this.valid = true;
      }
      if (isString(args[0])) {
        try {
          this.date = CDate.stringToDate(args[0]);
          this.valid = isValidDate(this.date);
          // eslint-disable-next-line no-empty
        } catch (err) {}
      }
    }
    if (args.length >= 2) {
      const [year, monthIndex] = args.slice(0, 2);
      let [day, hours, minutes, seconds, milliseconds] = args.slice(2);
      day = day === undefined ? 1 : day;
      hours = hours === undefined ? 0 : hours;
      minutes = minutes === undefined ? 0 : minutes;
      seconds = seconds === undefined ? 0 : seconds;
      milliseconds = milliseconds === undefined ? 0 : milliseconds;
      const validDate = validDateParameters(year as number, (monthIndex as number) + 1, day as number);
      const validTime = validTimeParameters(
        hours as number,
        minutes as number,
        seconds as number,
        milliseconds as number
      );
      if (validDate && validTime) {
        this.date = new Date(
          year as number,
          monthIndex as number,
          day as number,
          hours as number,
          minutes as number,
          seconds as number,
          milliseconds as number
        );
        this.valid = isValidDate(this.date);
      }
    }
    if (!this.valid) this.date = undefined;
    return this;
  }

  /**
   * Converts a valid date into a string in one of the pre-defined formats.
   * The expected behaviour is the following:
   * - if the input string a full ISO-8061 string, it is converted as is by the native `Date` constructor after cheking if date and time are valid
   * - if the input string is a short ISO-8061 string (i.e. in the format `YYYY-MM-DD`), it is passed as `YYYY-MM-DDT00:00` to the native contructor (after validation) so as to ensure that it will be interpreted as in the local timezone, not in UTC
   * - otherwise, the input string must meet any of the formats defined in the `DATE_INPUT_FORMATS` enumeration
   *
   * Usage:
   * ```
   * console.log(stringToDate('06/01/2021', DATE_INPUT_FORMATS.DD_MM_YYYY));
   * // Output: Wed Jan 06 2021 00:00:00 GMT-0000 (UTC)
   * ```
   *
   * @param dateString
   * @param inputFormat
   */
  static stringToDate(dateString: string, inputFormat?: DATE_INPUT_FORMATS): Date {
    return stringToDate(dateString, inputFormat);
  }

  /**
   * Sets locale to be used for converting date to string.
   *
   * @param locale A Unicode BCP 47 locale identifier, like "pt-BR" or "en-US".
   */
  setLocale(locale: string): CDate {
    this.locale = locale;
    return this;
  }

  /**
   * Sets timezone to be used for converting date to string.
   *
   * @param timezone Valid IANA timezone string.
   */
  setTimezone(timezone: string): CDate {
    this.timezone = timezone;
    return this;
  }

  /**
   * Returns the value of `locale` private attribute. If no locale was previously set, the user's locale will be returned.
   */
  getLocale(): string {
    return this.locale;
  }

  /**
   * Returns the value of `timezone` private attribute. If no timezone was previously set, the user's timezone will be returned.
   */
  getTimezone(): string {
    return this.timezone;
  }

  /**
   * Returns the value of `date` private attribute (the underlying native `Date` object).
   */
  getNative(): Date | undefined {
    return this.date;
  }

  /**
   * Informs whether the class represents a valid `Date` object.
   */
  isValid(): boolean {
    return this.valid;
  }

  /**
   * Informs whether the underlying date is contained within a leap year.
   */
  isLeapYear(): boolean {
    if (!this.valid || this.date === undefined) throw new Error('Invalid date!');
    return isLeapYear(this.date.getFullYear());
  }

  /**
   * Informs whether the underlying date is after the other date given as a parameter.
   *
   * @param date
   */
  isAfter(date: Date): boolean {
    if (!this.valid || this.date === undefined) throw new Error('Invalid date!');
    return isAfter(this.date, date);
  }

  /**
   * Informs whether the underlying date is before the other date given as a parameter.
   *
   * @param date
   */
  isBefore(date: Date): boolean {
    if (!this.valid || this.date === undefined) throw new Error('Invalid date!');
    return isBefore(this.date, date);
  }

  /**
   * Informs whether the underlying date is between the other two dates given as parameters.
   *
   * @param first
   * @param second
   */
  isBetween(first: Date, second: Date): boolean {
    if (!this.valid || this.date === undefined) throw new Error('Invalid date!');
    return isBetween(this.date, first, second);
  }

  /**
   * Informs whether the underlying date is the same as the other date given as a parameter.
   * Only year, month and date are taken into account in the comparison. Time information is discarded.
   *
   * @param date
   */
  sameAs(date: Date): boolean {
    if (!this.valid || this.date === undefined) throw new Error('Invalid date!');
    return isSameDate(this.date, date);
  }

  /**
   * Like Moment's `fromNow()`. Uses Javascript's native `Intl` API.
   *
   * Usage:
   * ```
   * console.log(new CDate().setLocale('pt-BR').fromNow(DURATION_TYPES.SECONDS));
   * // Output: agora
   * ```
   *
   * @param durationType If omitted, `DURATION_TYPES.SECONDS` will be used.
   */
  fromNow(durationType: DURATION_TYPES = DURATION_TYPES.SECONDS): string {
    if (!this.valid || this.date === undefined) throw new Error('Invalid date!');
    return durationFromNow(this.date, durationType, this.locale);
  }

  /**
   * Returns short ISO-8061 representation of the underlying date.
   *
   * Example:
   * ```
   * console.log(new CDate(2020, 0, 1).toString());
   * // Output: 2020-01-01
   * ```
   */
  toString(): string {
    if (!this.valid || this.date === undefined) throw new Error('Invalid date!');
    return dateToString(this.date, DATE_OUTPUT_FORMATS.SHORT_ISO);
  }

  /**
   * Returns ISO-8061 representation of the underlying date.
   *
   * Example:
   * ```
   * console.log(new CDate(2020, 0, 1).setTimezone('UTC').toSISOtring());
   * // Output: 2020-01-01T00:00:00.000Z
   * ```
   */
  toISOString(): string {
    if (!this.valid || this.date === undefined) throw new Error('Invalid date!');
    return dateToString(this.date, DATE_OUTPUT_FORMATS.ISO);
  }

  /**
   * Returns a locale string representation of the underlying date.
   *
   * Usage:
   * ```
   * console.log(new CDate(2020, 0, 1).setLocale('pt-BR').setTimeZone('America/Sao_Paulo').toLocaleString());
   * // Output: 01/01/2020
   * ```
   */
  toLocaleString(): string {
    if (!this.valid || this.date === undefined) throw new Error('Invalid date!');
    return dateToString(this.date, DATE_OUTPUT_FORMATS.SHORT_LOCALE, this.locale, this.timezone);
  }

  /**
   * Returns a locale string representation of the underlying date in a more human-readable format.
   *
   * Usage:
   * ```
   * console.log(new CDate(2020, 0, 1).setLocale('pt-BR').setTimeZone('America/Sao_Paulo').humanized());
   * // Output: 1 de janeiro de 2020
   * ```
   */
  humanized(): string {
    if (!this.valid || this.date === undefined) throw new Error('Invalid date!');
    return dateToString(this.date, DATE_OUTPUT_FORMATS.LOCALE, this.locale, this.timezone);
  }
}
