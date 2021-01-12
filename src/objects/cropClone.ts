import cloneDeep from './cloneDeep';
import { isObject } from '../predicates';

/**
 * Deep clones only properties of target object specified by the reference object. Useful when you want to discard desnecessary or unwanted data.
 *
 * Usage:
 * ```
 * const target: any = { a: null, b: null, c: null };
 * const refs: any = [{ a: null }, { b: null }, { c: null }, { d: null }];
 * console.log(cropClone(target, refs[0]));
 * // Output: { a: null }
 * ```
 * @param target
 * @param ref
 */
export default function cropClone(
  target: Record<string, unknown>,
  ref: Record<string, unknown>
): Record<string, unknown> {
  const keys = Object.keys(ref);
  return keys.reduce((r, k) => {
    if (Array.isArray(target[k]) || isObject(target[k])) {
      r[k] = cloneDeep(target[k]);
      return r;
    }
    r[k] = target[k];
    return r;
  }, {} as Record<string, unknown>);
}
