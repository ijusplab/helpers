/* eslint-disable @typescript-eslint/no-explicit-any */
import { isObject } from '../predicates';

/**
 * Like Python's `deepCopy`.
 *
 * ```
 * console.log(deepClone({ a: { b: { c: [1, 2, 3] }  } }));
 * Output: { a: { b: { c: [1, 2, 3] }  } }
 * ```
 * @param o
 */
export default function cloneDeep(o: unknown): unknown {
  if (Array.isArray(o)) {
    return o.map((item) => cloneDeep(item));
  }
  if (isObject(o)) {
    const keys = Object.keys(o) as Array<keyof typeof o>;
    return keys.reduce((r, k): any => {
      r[k] = cloneDeep(o[k]);
      return r;
    }, {} as Record<string, any>);
  }
  return o;
}
