import { isDate } from '../predicates';

/**
 * To be used as callback for native `filter` method of arrays.
 * The params are those usually passed by the native method.
 *
 * @param value
 * @param index
 * @param arr
 */
export default function filterUnique(
  value: string | number | Date,
  index: number,
  arr: Array<string | number | Date>
): boolean {
  if (isDate(value)) return arr.findIndex((date) => isDate(date) && date.valueOf() === value.valueOf()) === index;
  return arr.indexOf(value) === index;
}
