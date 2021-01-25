import range from './range';

/**
 * Similar to Python's zip function.
 *
 * **Usage:**
 * ```
 * const newArray = zip([1, 2, 3], ['a', 'b', 'c'], [true, false, true]);
 * console.log(newArray);
 * // Output: [[1, 'a', true], [2, 'b', false], [3, 'c', true]]
 * ```
 * @param array Array to be zipped
 * @param fillWith Value to use in case of undefined. Defaults to empty string
 */
type values = string | number | boolean | Date | null | undefined;

export default function zip(array: values[][], fillWith: values = ''): values[][] {
  const colLength = array.reduce((max, row) => Math.max(max, row.length), 0);
  return range(colLength).map((_, col) => array.map((row) => row[col] ?? fillWith));
}
