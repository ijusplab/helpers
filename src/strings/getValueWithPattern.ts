import { isString, isRegExp } from '../predicates';

/**
 * Returns first match of regular expression in the input string or null in case of no match.
 * Throws exception if input is a not a string or if pattern is not RegExp.
 *
 * @param str The input string
 * @param pattern The RegExp to be used
 */
export default function getValueWithPattern(str: string, pattern: RegExp): string | null {
  if (!isString(str)) throw new Error('The input must be a string!');
  if (!isRegExp(pattern)) throw new Error('The pattern must be a regular expression!');
  const found = pattern.exec(str);
  // Gives precedence to first capturing group. If there is none, returns the whole match.
  if (Array.isArray(found) && found.length > 0) return found[1] || found[0];
  return null;
}
