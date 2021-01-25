import { equals } from '../objects';
import flatten from './flatten';

/**
 * Returns an array containing the common values for all arguments passed to the function, which may be single values and/or arrays of values.
 *
 * @param args One or more values and/or arrays of values to be intersected
 */
export default function intersection(...args: unknown[]): unknown[] {
  if (args.length === 0) return [];
  // Flattens the first argument, if it is an array, or converts into array if its a single value
  const first = Array.isArray(args[0]) ? flatten(args[0]) : [args[0]];
  if (args.length === 1) return first;
  const common = [];
  // Iterates through all values in the first argument and checks which of them are common to all other arguments
  // Only the common ones are pushed to the array to be returned by the function
  for (let i = 0; i < first.length; i++) {
    const a = first[i];
    let isCommon = true;
    for (let j = 1; j < args.length; j++) {
      const arg = Array.isArray(args[j]) ? flatten(args[j] as unknown[]) : [args[j]];
      isCommon = isCommon && arg.some((b) => equals(a, b));
    }
    if (isCommon) common.push(a);
  }
  return common as unknown[];
}
