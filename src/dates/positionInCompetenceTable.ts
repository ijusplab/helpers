import isSameDate from './isSameDate';
import firstDayOfMonth from './firstDayOfMonth';
import lastDayOfMonth from './lastDayOfMonth';
import { isValidDate, isTableOfDates } from '../validation';
import type { table } from '../predicates';

/**
 * Given a "competence table" (explained below), finds the index of a given date in that table, that is, the index of the row having the same month and year of the given date.
 * A table is an array of arrays of equal length. The inner arrays are rows and each position in a row corresponds to a column.
 * Values in a table are called cells. Cells may be read as follows: `table[row][column]`.
 * A competence is a date that, by convention, represents a month. It is assumed to always have its date set to the first day of that month.
 * A table of competences is a table of just one column, where each row has one competence and where all competences are in ascending order.
 *
 * Example:
 * ```
 * const date = new Date(2021, 2, 20);
 * const table = [
 *   [new Date('2020-01-01T00:00')],
 *   [new Date('2020-02-01T00:00')],
 *   [new Date('2020-03-01T00:00')],
 *   [new Date('2020-04-01T00:00')],
 *   [new Date('2020-05-01T00:00')],
 *   [new Date('2020-06-01T00:00')],
 *   [new Date('2020-07-01T00:00')],
 *   [new Date('2020-08-01T00:00')],
 *   [new Date('2020-09-01T00:00')],
 *   [new Date('2020-10-01T00:00')],
 *   [new Date('2020-11-01T00:00')],
 *   [new Date('2020-12-01T00:00')],
 *   [new Date('2021-01-01T00:00')],
 *   [new Date('2021-02-01T00:00')],
 *   [new Date('2021-03-01T00:00')]
 * ];
 * console.log(positionInCompetenceTable(table, date));
 * // Output: 14
 * ```
 *
 * @param table A table of competences
 * @param date A date
 */
export default function positionInCompetenceTable(table: table<Date>, date: Date): number {
  if (!isTableOfDates(table)) throw new Error('This function accepts a table of dates only!');
  if (!isValidDate(date)) throw new Error('Competence must be a valid date!');
  if (
    table[0][0].valueOf() > date.valueOf() ||
    lastDayOfMonth(table[table.length - 1][0] as Date).valueOf() < date.valueOf()
  ) {
    throw new Error('Competence out of range!');
  }
  return table.reduce(
    (n, row, index) => (isSameDate(firstDayOfMonth(row[0] as Date), firstDayOfMonth(date)) ? index : n),
    0
  );
}
