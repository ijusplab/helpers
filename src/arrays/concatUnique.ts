import filterUnique from './filterUnique';
import flatten from './flatten';

/**
 * Concatenates any number of booleans, strings, numbers or Dates or arrays of those types.
 * Keeps only unique items.
 *
 * **Usage:**
 * ```
 * const newArray = concatUnique([1, 'a', 'b', 3], [2, 'a', 'b'], 3, 'c');
 * console.log(newArray);
 * // Output: [1, 'a', 'b', 3, 2, 'c']
 * ```
 * @param args Any number of arrays or values to be concatenated
 */
export default function concatUnique(...args: unknown[]): unknown[] {
  args = args.map((arg) => (Array.isArray(arg) ? flatten(arg) : arg));
  return Array.prototype.concat(...args).filter(filterUnique);
}
