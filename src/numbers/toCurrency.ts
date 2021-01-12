import parseFloatLocale from './parseFloatLocale';
import toLocaleNumberFormat from './toLocaleNumberFormat';
import { getUserLocale } from '../locale';
import { isNumeric } from '../validation';
import type { CURRENCY_CODES } from '../enums';

/**
 * Formats a number into a localized currency format using the native `Intl` object.
 *
 * Usage:
 * ```
 * console.log(toCurrency('1000000,2345', CURRENCY_CODES.BRL, 'pt-BR'));
 * // Output: R$ 1.000.00,23
 * ```
 * @param value
 * @param currency Any currency code given in the `CURRENCY_CODES`. If omitted, will use the "$" prefix.
 * @param locale A Unicode BCP 47 locale identifier, like "pt-BR" or "en-US". If omitted, the user's locale will be used.
 */
export default function toCurrency(
  value: number | string,
  currency?: CURRENCY_CODES,
  locale: string = getUserLocale()
): string {
  if (!isNumeric(value)) throw new Error('The function accepts only numeric values!');
  if (currency) {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(parseFloatLocale(value));
  } else {
    const number = parseFloatLocale(value);
    const prefix = number < 0 ? '-$' : '$';
    return `${prefix}${toLocaleNumberFormat(Math.abs(number), 2, locale)}`;
  }
}
