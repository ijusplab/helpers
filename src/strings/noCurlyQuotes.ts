import { isString } from '../predicates';

/**
 * Replaces curly quotes with regular double quotation marks.
 * Throws exception if input is a not a string.
 *
 * @param str The input string
 */
export default function noCurlyQuotes(str: string): string {
  if (!isString(str)) throw new Error('The input must be a string!');
  return str.replace(/[\u2018-\u201B\u2032\u2035]/g, "'").replace(/[\u201C-\u201F\u2033\u2034\u2036\u2037]/g, '"');
}
