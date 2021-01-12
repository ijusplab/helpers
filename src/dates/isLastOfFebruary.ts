/**
 * Checks if a date is the last date of February.
 *
 * @param date
 */
export default function isLastOfFebruary(date: Date): boolean {
  const clone = new Date(date.getTime());
  clone.setMonth(2);
  clone.setDate(0);
  return date.getMonth() === clone.getMonth() && date.getDate() === clone.getDate();
}
