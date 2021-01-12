/**
 * Returns the last day of February for any given year.
 *
 * Example:
 * ```
 * console.log(lastOfFebruary(2020));
 * Output: 29
 * ```
 *
 * @param year
 */
export default function lastOfFebruary(year: number): number {
  return new Date(year, 2, 0).getDate();
}
