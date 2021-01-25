/**
 * Flattens an array of any depth, recursively.
 *
 * **Usage:**
 * ```
 * const newArray = flatten([1, ['a', 'b', [3], [[2, ['a']], 'b']]]);
 * console.log(newArray);
 * // Output: [1, 'a', 'b', 3, 2, 'a', 'b']
 * ```
 * @param array The array to be flattened
 */
export default function flatten(array: unknown[]): unknown[] {
  let result = [] as unknown[];
  for (let i = 0; i < array.length; i++) {
    const maybe = array[i];
    if (Array.isArray(maybe)) {
      result = Array.prototype.concat(result, flatten(maybe));
    } else {
      result.push(maybe);
    }
  }
  return result;
}
