import { isString } from '../predicates';
import noDiacritics from './noDiacritics';

/**
 * Removes all diacritics and special characters from a string.
 * Throws exception if input is a not a string.
 *
 * @param str The input string
 */
export default function onlyAlphanumericWords(str: string): string {
  if (!isString(str)) throw new Error('The input must be a string!');
  return noDiacritics(str).replace(/[^\s\w]/g, '');
}
