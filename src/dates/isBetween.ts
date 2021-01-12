import isAfter from './isAfter';
import isBefore from './isBefore';

/**
 * Checks if one day is between two others
 *
 * @param date
 * @param first
 * @param second
 */
export default function isBetween(date: Date, first: Date, second: Date): boolean {
  return first.valueOf() < second.valueOf()
    ? isAfter(date, first) && isBefore(date, second)
    : isAfter(date, second) && isBefore(date, first);
}
