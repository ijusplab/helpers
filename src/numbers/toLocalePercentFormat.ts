import parseFloatLocale from './parseFloatLocale';
import { getUserLocale } from '../locale';

/**
 * Formats a number into a localized format using the native `Intl` object.
 *
 * Usage:
 * ```
 * console.log(toLocalePercentFormat(0.234567, 2, 'pt-BR'));
 * // Output: 23,46%
 * ```
 * @param value
 * @param precision Number of decimal places to be returned. If omitted, will be `0`.
 * @param locale A Unicode BCP 47 locale identifier, like "pt-BR" or "en-US". If omitted, the user's locale will be used.
 */
export default function toLocalePercentFormat(
  value: number | string,
  precision = 0,
  locale: string = getUserLocale()
): string {
  const options = { style: 'percent', maximumFractionDigits: precision };
  return new Intl.NumberFormat(locale, options).format(parseFloatLocale(value));
}
