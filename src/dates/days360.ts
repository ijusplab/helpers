import isLastOfFebruary from './isLastOfFebruary';
import { isValidDate } from '../validation';
import { DAYS360_METHODS } from '../enums';

/**
 * Equivalent to Excel's Days360.
 * Since Excel implements the "US/NASD" method incorrectly, an option "EXCEL" was created for the sake of compatibility.
 * In short, Excel ommitts one step of the `US-NASD` system, which is change end date to 30 if both start and end are the last day of February.
 *
 * Useful resources:
 * - [https://wiki.openoffice.org/wiki/Documentation/How_Tos/Calc:_Date_&_Time_functions#Financial_date_systems](https://wiki.openoffice.org/wiki/Documentation/How_Tos/Calc:_Date_&_Time_functions#Financial_date_systems)
 * - [https://github.com/spacecraftinc/days360/blob/master/index.js](https://github.com/spacecraftinc/days360/blob/master/index.js)
 *
 * Usage:
 * ```
 * console.log(days360(new Date('2024-02-29T00:00'), new Date('2030-01-31T00:00'), DAYS360_METHODS.EXCEL)));
 * // Output: 2130
 * ```
 *
 * @param start
 * @param end
 * @param method If omitted, `DAYS360_METHODS.EXCEL` (modified `DAYS360_METHODS.USD_NASD`) will be used
 */
export default function days360(start: Date, end: Date, method: DAYS360_METHODS = DAYS360_METHODS.EXCEL): number {
  if (!isValidDate(start) || !isValidDate(end)) throw new Error('The function accepts valid dates only!');

  let startDay = start.getDate();
  const startMonth = start.getMonth() + 1;
  const startYear = start.getFullYear();

  let endDay = end.getDate();
  const endMonth = end.getMonth() + 1;
  const endYear = end.getFullYear();

  if (method === DAYS360_METHODS.EU) {
    startDay = Math.min(startDay, 30);
    endDay = Math.min(endDay, 30);
  } else {
    if (method === DAYS360_METHODS.US_NASD && isLastOfFebruary(start) && isLastOfFebruary(end)) {
      endDay = 30;
    }
    if (isLastOfFebruary(start) || startDay === 31) {
      startDay = 30;
    }
    if (startDay === 30 && endDay === 31) {
      endDay = 30;
    }
  }

  return (endYear - startYear) * 360 + (endMonth - startMonth) * 30 + (endDay - startDay);
}
