/* eslint-disable @typescript-eslint/no-explicit-any */
import getKeysFromPath from './getKeysFromPath';

/**
 * Gets a value from an object from a string path of the type "a.b[3].d.e"
 *
 * Usage:
 * ```
 * const obj = { one: { two: { three: [['Nothing here', 'Hello!']]}};
 * const path = 'one.two.three[0][1]';
 * console.log(obj, path));
 * // Output: Hello!
 * ```
 * @param target
 * @param path
 */
export default function getValueFromPath(target: Record<string, any>, path: string): any {
  const keys = getKeysFromPath(path);
  let current = target;
  while (keys.length > 0) {
    const key = keys.shift();
    if (key === undefined) break;
    current = current[key];
    if (current === undefined) break;
  }
  return current;
}
