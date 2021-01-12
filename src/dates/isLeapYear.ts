import lastOfFebruary from './lastOfFebruary';

/**
 * Check if a year is a leap year
 *
 * @param year
 */
export default function isLeapYear(year: number): boolean {
  return lastOfFebruary(year) === 29;
}
