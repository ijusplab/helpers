import { isValidDate } from '../validation';

/**
 * Checks if one date is after another
 *
 * @param date
 * @param ref
 */
export default function isAfter(date: Date, ref: Date): boolean {
  if (!isValidDate(date) || !isValidDate(ref)) throw new Error('Invalid date!');
  return date.valueOf() > ref.valueOf();
}
