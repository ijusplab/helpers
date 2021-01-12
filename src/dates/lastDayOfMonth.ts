import { isNumber } from '../predicates';
import { isValidDate } from '../validation';

/**
 * Returns the last day of the month, alowing for adding or subtracting months.
 *
 * Usage:
 * ```
 * console.log(lastDayOfMonth(new Date(2020, 0, 1)));
 * // Output: Fri Jan 31 2020 00:00:00 GMT-0000 (UTC)
 * ```
 *
 * @param date
 * @param monthsToAdd
 */
export default function lastDayOfMonth(date: Date, monthsToAdd?: number): Date {
  if (!isValidDate(date)) throw new Error('The function accepts valid dates only!');
  monthsToAdd = isNumber(monthsToAdd) ? monthsToAdd : 0;
  return new Date(date.getFullYear(), date.getMonth() + 1 + monthsToAdd, 0);
}
