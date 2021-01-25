import { isValue, isDate } from '../predicates';

/**
 * To be used as a callback for the native `filter` method of arrays.
 * The params are those usually passed by the native method.
 *
 * @param value
 * @param index
 * @param arr
 */
export default function filterUnique<T>(value: T, index: number, arr: T[]): boolean {
  if (!isValue(value)) return false;
  if (isDate(value)) return arr.findIndex((date) => isDate(date) && date.valueOf() === value.valueOf()) === index;
  return arr.indexOf(value) === index;
}
