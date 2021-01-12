import { isNumber, isString } from '../predicates';
import { isNumeric } from '../validation';

/**
 * Parses localized number string such as $1,000.00 or R$ 1.000,00.
 *
 * Usage:
 * ```
 * console.log(parseFloatLocale('US$1.000,00'));
 * // Output: 1000
 * ```
 * @param value
 */
export default function parseFloatLocale(value: string | number): number {
  if (isNumber(value)) {
    if (isNumeric(value)) {
      return value;
    }
    throw new Error('Only numeric values are accepted!');
  }
  if (!isString(value) || !isNumeric(value.replace(/[^-\d.]/g, '')))
    throw new Error('Only numeric values are accepted!');
  if (value.lastIndexOf('.') > 0 || value.lastIndexOf(',') > 0) {
    const decimalSeparator = value.lastIndexOf('.') > value.lastIndexOf(',') ? '.' : ',';
    if (decimalSeparator === '.') {
      value = value.replace(/,/g, '');
    } else {
      value = value.replace(/\./g, '').replace(/,/, '.');
    }
  }

  // Taking out any non numeric characters, except for "-" and "."
  value = value.replace(/[^-\d.]/g, '');
  // But the negative sign must only be placed at the beggining
  if (!/^-?[\d.]+$/.test(value)) throw new Error('Invalid input!');

  return parseFloat(value);
}
