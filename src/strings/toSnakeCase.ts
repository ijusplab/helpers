import normalize from './normalize';

/**
 * Converts any string to `snake_case`.
 * Throws exception if input is a not a string (througn the other functions invoked).
 *
 * @param str The input string
 */
export default function toSnakeCase(str: string): string {
  return normalize(str).replace(/[\s]+/g, '_').toLowerCase();
}
