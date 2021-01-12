import { isValidDate } from '../validation';
import { DURATION_TYPES } from '../enums';

const millisToSeconds = (millis: number): number => millis / 1000;
const millisToMinutes = (millis: number): number => millisToSeconds(millis) / 60;
const millisToHours = (millis: number): number => millisToMinutes(millis) / 60;
const millisToDays = (millis: number): number => millisToHours(millis) / 24;

/**
 * Equivalent to Excel's `DATEDIFF` function.
 *
 * Usage:
 * ```
 * console.log(dateDiff(new Date('2020-01-01T00:00'), new Date('2021-01-01T00:00'), DURATION_TYPES.YEARS)));
 * // Output: 1
 * ```
 *
 * @param start
 * @param end
 * @param durationType
 */
export default function dateDiff(
  start: Date,
  end: Date,
  durationType: DURATION_TYPES = DURATION_TYPES.SECONDS
): number {
  if (!isValidDate(start) || !isValidDate(end)) throw new Error('The function accepts valid dates only!');
  switch (durationType) {
    case DURATION_TYPES.SECONDS:
      return Math.ceil(millisToSeconds(end.valueOf()) - millisToSeconds(start.valueOf()));
    case DURATION_TYPES.MINUTES:
      return Math.ceil(millisToMinutes(end.valueOf()) - millisToMinutes(start.valueOf()));
    case DURATION_TYPES.HOURS:
      return Math.ceil(millisToHours(end.valueOf()) - millisToHours(start.valueOf()));
    case DURATION_TYPES.DAYS:
      return Math.ceil(millisToDays(end.valueOf()) - millisToDays(start.valueOf()));
    case DURATION_TYPES.MONTHS:
      return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
    case DURATION_TYPES.YEARS:
      return end.getUTCFullYear() - start.getUTCFullYear();
    default:
      throw new Error('Invalid duration parameter!');
  }
}
