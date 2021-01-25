import normalize from './normalize';

/**
 * Converts any string to `kebab-case`.
 * Throws exception if input is a not a string (througn the other functions invoked).
 *
 * @param str The input string
 */
export default function toKebabCase(str: string): string {
  return normalize(str).replace(/[\s]+/g, '-').toLowerCase();
}
