/**
 * Similar to Python's `range` function.
 * Returns array of integers with `n` items from `0` to `n - 1`
 *
 * @param n
 */
export default function range(n: number): number[] {
  return [...Array(n)].map((_x, i) => i);
}
