/**
 * A more convenient way to check types in Javascript instead of `typeof` and `instanceof`.
 *
 * @param o
 */
export default function toType(o: unknown): string {
  // @ts-expect-error Type is being checked
  return {}.toString
    .call(o)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}
