import filterUnique from './filterUnique';

/**
 * Concatenates any number of arrays of strings and/or number, as well as strings and numbers.
 * Keeps only unique items.
 *
 * **Usage:**
 * ```
 * const newArray = concatUnique([1, 'a', 'b', 3], [2, 'a', 'b'], 3, 'c');
 * console.log(newArray);
 * // Output: [1, 'a', 'b', 3, 2, 'c']
 * ```
 * @param args Any number of arrays, strings or numbers to be concatenated
 */
export default function concatUnique(...args: Array<string | number | Array<string | number>>): Array<string | number> {
  return Array.prototype.concat(...args).filter(filterUnique);
}
