import { getUserLocale, getUserTimeZone } from '../locale';
import { isValidDate } from '../validation';
import { DATE_OUTPUT_FORMATS } from '../enums';

/**
 * Converts a string to a date after validation.
 *
 * Usage:
 * ```
 * console.log(dateToString(new Date('2020-01-01T00:00'), DATE_OUTPUT_FORMATS.LOCALE, 'pt-BR', 'America/Sao_Paulo')));
 * // Output: 1 de janeiro de 2020
 * ```
 *
 * @param date A native `Date` object
 * @param format The intended output format
 * @param locale A Unicode BCP 47 locale identifier, like "pt-BR" or "en-US". If omitted, the user's locale will be used.
 * @param timezone A valid Zone or Link name of the IANA Time Zone Database, like "America/Sao_Paulo" or "UTC". If omitted, the user's timezone will be used.
 */
export default function dateToString(
  date: Date,
  format: DATE_OUTPUT_FORMATS = DATE_OUTPUT_FORMATS.SHORT_ISO,
  locale: string = getUserLocale(),
  timezone: string = getUserTimeZone()
): string {
  if (!isValidDate(date)) throw new Error('Invalid date!');
  switch (format) {
    case DATE_OUTPUT_FORMATS.ISO:
      return toISO(date);
    case DATE_OUTPUT_FORMATS.LOCALE:
      return toLocale(date, locale, timezone);
    case DATE_OUTPUT_FORMATS.SHORT_ISO:
      return toShortISO(date);
    case DATE_OUTPUT_FORMATS.SHORT_LOCALE:
      return toShortLocale(date, locale, timezone);
    default:
      throw new Error('Invalid output format!');
  }
}

function toISO(date: Date): string {
  return date.toISOString();
}

function toShortISO(date: Date): string {
  return date.toISOString().substr(0, 10);
}

function toLocale(date: Date, locale: string, timezone: string): string {
  return date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: timezone });
}

function toShortLocale(date: Date, locale: string, timezone: string): string {
  return date.toLocaleDateString(locale, { timeZone: timezone });
}
