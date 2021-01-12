import dateDiff from './dateDiff';
import { isValidDate } from '../validation';
import { DURATION_TYPES } from '../enums';

const validatePeriod = (start: Date, end: Date) => {
  if (!isValidDate(start) || !isValidDate(end)) throw new Error('The function accepts valid dates only!');
  if (end.valueOf() < start.valueOf()) throw new Error('Invalid period!');
};

/**
 * Returns the number of overlapping days between two date intervals. Time information is discarded.
 *
 * Usage:
 * ```
 * console.log(overlappingDays(new Date('2020-01-01'), new Date('2020-05-30'), new Date('2020-05-15'), new Date('2020-07-30')))
 * Output: 16
 * ```
 *
 * @param firstStart Start date of the first interval
 * @param firstEnd End date of the first interval
 * @param secondStart Start date of the second interval
 * @param secondEnd End date of the second interval
 */
export default function overlappingDays(firstStart: Date, firstEnd: Date, secondStart: Date, secondEnd: Date): number {
  validatePeriod(firstStart, firstEnd);
  validatePeriod(secondStart, secondEnd);
  if (secondStart.valueOf() > firstEnd.valueOf() || firstStart.valueOf() > secondEnd.valueOf()) return 0;
  const initial = Math.max(firstStart.valueOf(), secondStart.valueOf());
  const final = Math.min(firstEnd.valueOf(), secondEnd.valueOf());

  return dateDiff(new Date(initial), new Date(final), DURATION_TYPES.DAYS) + 1;
}
