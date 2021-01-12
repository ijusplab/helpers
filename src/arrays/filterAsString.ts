import { isString, isObject, isDate, isNumber } from '../predicates';

/**
 * Filters an array, returning only the items that contain the search argument.
 * First converts each item os the array into their string format.
 *
 * **Usage:**
 * ```
 * const arr = [
 *   { a: 'one is a word' },
 *   { b: 'two is a word' },
 *   { c: new Date('2020-01-01') }
 * ];
 * const search = 'two';
 * console.log(filterAsString(arr, search));
 * // Output: [ { b: 'two is a word' } ]
 * ```
 *
 * @param arr Array to be searched
 * @param search Search argument
 */
export default function filterAsString(arr: Array<unknown>, search: string): Array<unknown> {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array!');
  }
  if (!isString(search)) {
    throw new Error('Second argument must be a string!');
  }
  return arr.filter((item) => {
    const text = getAsString(item).toLowerCase();
    return text.indexOf(search) >= 0;
  });
}

function getAsString(o: unknown): string {
  if (isString(o)) {
    return o;
  }
  if (Array.isArray(o)) {
    return o.map((item) => getAsString(item)).join('\n');
  }
  if (isObject(o)) {
    const keys = Object.keys(o) as Array<keyof typeof o>;
    return keys.map((key) => (isString(key) ? getAsString(o[key]) : '')).join('\n');
  }
  if (isDate(o)) {
    return o.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  }
  if (isNumber(o)) {
    return o.toString();
  }
  return '';
}
