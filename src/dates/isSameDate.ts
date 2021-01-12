/**
 * Checks if two dates correspond to the same date, regardless of time, that is, taking into consideration only year, month and date.
 *
 * @param a
 * @param b
 */
export default function isSameDate(a: Date, b: Date): boolean {
  return (
    a.getUTCFullYear() === b.getUTCFullYear() &&
    a.getUTCMonth() === b.getUTCMonth() &&
    a.getUTCDate() === b.getUTCDate()
  );
}
