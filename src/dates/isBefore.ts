import { isValidDate } from '../validation';

/**
 * Checks if one day is before another
 *
 * @param date
 * @param ref
 */
export default function isBefore(date: Date, ref: Date): boolean {
  if (!isValidDate(date) || !isValidDate(ref)) throw new Error('Invalid date!');
  return date.valueOf() < ref.valueOf();
}
