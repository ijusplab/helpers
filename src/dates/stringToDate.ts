import { isString } from '../predicates';
import { validDateParameters, validTimeParameters } from '../validation';

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
export default function stringToDate(dateString: string, locale?: string): Date {
  if (!isString(dateString)) throw new Error('The function accepts strings only!');
  if (PATTERNS.ISO_8601.test(dateString) || PATTERNS.SHORT_ISO.test(dateString)) {
    return parseIso(dateString);
  }
  if (!isValidDateString(dateString)) throw new Error('Invalid date string!');
  return parseOther(dateString, locale);
}

const PATTERNS = {
  ISO_8601: /^\d{4}-\d{2}-\d{2}\D\d{2}:\d{2}:\d{2}\.\d{3}Z$/, // '2016-01-01T02:00:00.000Z'
  SHORT_ISO: /^\d{4}-\d{2}-\d{2}$/, // '2016-01-01'
  OTHERS: /^(\d{1,2}[-./])?\d{1,2}[-./]\d{2,4}$/
};

function isValidDateString(dateString: string): boolean {
  return PATTERNS.OTHERS.test(dateString);
}

function isValidIsoTime(timeString: string): boolean {
  const [hours, minutes, seconds, milliseconds] = timeString.split(/[:.]/g).map(Number);
  return validTimeParameters(hours, minutes, seconds, milliseconds);
}

function isValidShortIso(dateString: string): boolean {
  const [year, month, day] = dateString.split('-').map(Number);
  return validDateParameters(year, month, day);
}

function isValidIso(dateString: string): boolean {
  if (PATTERNS.SHORT_ISO.test(dateString)) {
    return isValidShortIso(dateString);
  }
  const [date, time] = dateString.slice(0, -1).split('T');
  return isValidShortIso(date) && isValidIsoTime(time);
}

function parseIso(dateString: string): Date {
  if (!isValidIso(dateString)) throw new Error('Invalid date string!');
  if (PATTERNS.SHORT_ISO.test(dateString)) dateString += 'T00:00';
  return new Date(dateString);
}

function parseOther(dateString: string, locale?: string): Date {
  const sequence = new Intl.DateTimeFormat(locale)
    .formatToParts(new Date())
    .filter((part) => part.type !== 'literal')
    .map((part) => part.type.substr(0, 1).toUpperCase());

  const fragments = dateString.split(/[-./]/g).map(Number);
  if (fragments.length === 2) fragments.unshift(1);

  let year, month, day;
  sequence.forEach((key, index) => {
    if (key === 'D') day = fragments[index];
    if (key === 'M') month = fragments[index];
    if (key === 'Y') year = fragments[index];
  });
  year = Number(('19' + year).slice(-4));
  day = day ? day : 1;

  if (!year || !month || !day) {
    throw new Error('Invalid date string!');
  }
  if (!validDateParameters(year, month, day))
    throw new Error(`Invalid date: ${year}-${('00' + month).slice(-2)}-${('00' + day).slice(-2)}!`);

  return new Date(year, month - 1, day);
}
