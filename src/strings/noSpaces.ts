import { isString } from '../predicates';

/**
 * Removes all spaces from a string, including `nbsp`.
 * Throws exception if input is a not a string.
 *
 * @param str The input string
 */
export default function noSpaces(str: string): string {
  if (!isString(str)) throw new Error('The input must be a string!');
  return str.replace(/[\s]+/g, '');
}
