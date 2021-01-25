import { isString } from '../predicates';

/**
 * Leaves only single spaces in a string and trims the edges.
 * Throws exception if input is a not a string.
 *
 * @param str The input string
 */
export default function noDoubleSpaces(str: string): string {
  if (!isString(str)) throw new Error('The input must be a string!');
  return str.replace(/[\s]+/g, ' ').trim();
}
