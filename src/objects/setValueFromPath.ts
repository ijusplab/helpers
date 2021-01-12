/* eslint-disable @typescript-eslint/no-explicit-any */
import getKeysFromPath from './getKeysFromPath';

/**
 * Gets a value from an object from a string path of the type "a.b[3].d.e"
 *
 * Usage:
 * ```
 * const obj = { one: { two: { three: [['Nothing here', 'Hello!']]}};
 * console.log(obj.one.two.three[0][1]);
 * // Output: Hello!
 *
 * const path = 'one.two.three[0][1]';
 * setValueFromPath(obj, path, 'Hi!'));
 *
 * console.log(obj.one.two.three[0][1]);
 * // Output: Hi!
 * ```
 * @param target
 * @param path
 * @param value
 */
export default function setValueFromPath(target: Record<string, any>, path: string, value: unknown): void {
  const keys = getKeysFromPath(path);
  let current = target;
  while (keys.length > 1) {
    const key = keys.shift();
    if (key === undefined) break;
    current = current[key];
    if (current === undefined) break;
  }
  if (current !== undefined) {
    current[keys[0]] = value;
  }
}
