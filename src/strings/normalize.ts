import noDiacritics from './noDiacritics';
import noDoubleSpaces from './noDoubleSpaces';
import onlyAlphanumericWords from './onlyAlphanumericWords';

/**
 * Removes all diacritics, all control chars, all non-alphanumeric characters and trims all spaces in the input string.
 * Throws exception if input is a not a string (througn the other functions invoked).
 *
 * @param str The input string
 */
export default function normalize(str: string): string {
  return onlyAlphanumericWords(noDoubleSpaces(noDiacritics(str)));
}
