import parseFloatLocale from './parseFloatLocale';
import { getUserLocale } from '../locale';
import { isNumeric } from '../validation';

/**
 * Formats a number into a localized format using the native `Intl` object.
 *
 * Usage:
 * ```
 * console.log(toLocaleNumberFormat('1000000,2345', 2, 'pt-BR'));
 * // Output: 1.000.00,23
 * ```
 * @param value
 * @param precision Number of decimal places to be returned. If omitted, will be `0`.
 * @param locale A Unicode BCP 47 locale identifier, like "pt-BR" or "en-US". If omitted, the user's locale will be used.
 */
export default function toLocaleNumberFormat(value: number | string, precision = 0, locale = getUserLocale()): string {
  if (!isNumeric(value)) throw new Error('The function accepts only numeric values!');
  return new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: precision,
    maximumFractionDigits: precision
  }).format(parseFloatLocale(value));
}
