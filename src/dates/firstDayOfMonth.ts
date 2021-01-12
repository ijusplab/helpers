import { isNumber } from '../predicates';
import { isValidDate } from '../validation';

/**
 * Returns the first day of the month, alowing for adding or subtracting months.
 *
 * Usage:
 * ```
 * console.log(firstDayOfMonth(new Date(2020, 0, 31)));
 * // Output: Wed Jan 01 2020 00:00:00 GMT-0000 (UTC)
 * ```
 *
 * @param date
 * @param monthsToAdd
 */
export default function firstDayOfMonth(date: Date, monthsToAdd?: number): Date {
  if (!isValidDate(date)) throw new Error('The function accepts valid dates only!');
  monthsToAdd = isNumber(monthsToAdd) ? monthsToAdd : 0;
  return new Date(date.getFullYear(), date.getMonth() + monthsToAdd, 1);
}
