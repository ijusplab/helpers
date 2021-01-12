import { isNumber } from '../predicates';

/**
 * Validates year, month and day, checking if all parameters are numbers and represent an actually existing date.
 * So, for example, it returns for dates like `2020-02-30`, `2019-50-60` and so on.
 *
 * @param year
 * @param month
 * @param day
 */
export default function validDateParameters(year: number, month: number, day: number): boolean {
  if (!isNumber(year) || !isNumber(month) || !isNumber(day)) return false;
  if (year < 0 || month < 1 || month > 12 || day < 1 || day > 31) return false;
  const date = new Date(year, month - 1, day);
  return year === date.getFullYear() && month === date.getMonth() + 1 && day === date.getDate();
}
