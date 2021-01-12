import { toType, isObject, isDate } from '../predicates';

/**
 * Checks of any two values, objects or arrays are equal.
 * In case of arrays and objects, it performs a deep analysis, by traversing all items/properties.
 *
 * Usage:
 * ```
 * console.log(equals([null, NaN, { a: [], b: }, 1, 2, 3], [null, NaN, { a: [], b: }, 1, 2, 3]));
 * // Output: true
 * ```
 * @param a
 * @param b
 */
export default function equals(a: unknown, b: unknown): boolean {
  if (toType(a) !== toType(b)) {
    return false;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((v, i) => equals(v, b[i]));
  }
  if (isObject(a) && isObject(b)) {
    const keysA = Object.keys(a) as Array<keyof typeof a> | Array<keyof typeof b>;
    const keysB = Object.keys(b) as Array<keyof typeof b> | Array<keyof typeof a>;
    const sameKeys = equals(keysA, keysB);
    return sameKeys && keysA.every((key) => equals(a[key], b[key]));
  }
  if (isDate(a) && isDate(b)) {
    return a.valueOf() === b.valueOf();
  }
  return Object.is(a, b);
}
