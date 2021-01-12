import dateDiff from './dateDiff';
import firstDayOfMonth from './firstDayOfMonth';
import { range } from '../arrays';
import { DURATION_TYPES } from '../enums';

/**
 * Gets an array of dates representing a sequence of competences from `start` to `end`.
 * By convention, each competence corresponds to the first day of the month.
 *
 * Usage:
 * ```
 * console.log(competenceRange(new Date(2020, 0, 1), new Date(2020, 3, 1)));
 * // Output: [Wed Jan 01 2020 00:00:00 GMT-0000 (UTC), Sat Feb 01 2020 00:00:00 GMT-0000 (UTC), Sun Mar 01 2020 00:00:00 GMT-0000 (UTC), Wed Apr 01 2020 00:00:00 GMT-0000 (UTC)]
 * ```
 *
 * @param start
 * @param end
 */
export default function competenceRange(start: Date, end: Date): Date[] {
  const months = dateDiff(start, end, DURATION_TYPES.MONTHS) + 1;
  return range(months).map((monthsToAdd) => firstDayOfMonth(start, monthsToAdd));
}
