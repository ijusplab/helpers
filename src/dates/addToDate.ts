import { isNumber } from '../predicates';
import { isValidDate } from '../validation';
import { DURATION_TYPES } from '../enums';

/**
 * Adds (or subtracts) a number of years, months, weeks, days, hours, minutes or seconds to the input date.
 *
 * Usage:
 * ```
 * console.log(addToDate(new Date(2020, 0, 31), 5, DURATION_TYPES.DAYS));
 * // Output: Wed Feb 05 2020 00:00:00 GMT-0000 (UTC)
 * ```
 *
 * @param date
 * @param unitiesToAdd
 */
export default function addToDate(
  date: Date,
  unities: number,
  durationType: DURATION_TYPES = DURATION_TYPES.DAYS
): Date {
  if (!isValidDate(date)) throw new Error('The function accepts valid dates only!');

  unities = isNumber(unities) ? unities : 0;

  switch (durationType) {
    case DURATION_TYPES.YEARS:
      return new Date(
        date.getFullYear() + unities,
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      );

    case DURATION_TYPES.MONTHS:
      return new Date(
        date.getFullYear(),
        date.getMonth() + unities,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      );

    case DURATION_TYPES.DAYS:
      return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + unities,
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      );

    case DURATION_TYPES.WEEKS:
      return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + unities * 7,
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      );

    case DURATION_TYPES.HOURS:
      return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours() + unities,
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      );

    case DURATION_TYPES.MINUTES:
      return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes() + unities,
        date.getSeconds(),
        date.getMilliseconds()
      );

    case DURATION_TYPES.SECONDS:
      return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds() + unities,
        date.getMilliseconds()
      );

    default:
      throw new Error('Invalid duration parameter!');
  }
}
