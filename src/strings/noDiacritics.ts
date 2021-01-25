import { isString } from '../predicates';

/**
 * Removes all diacritics from a string. Throws exception if input is a not a string.
 *
 * @param str The input string
 */
export default function noDiacritics(str: string): string {
  if (!isString(str)) throw new Error('The input must be a string!');
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
