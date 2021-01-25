import normalize from './normalize';
import noSpaces from './noSpaces';

/**
 * Converts any string to `camelCase`.
 * Throws exception if input is a not a string (througn the other functions invoked).
 *
 * @param str The input string
 */
export default function toCamelCase(str: string): string {
  return noSpaces(
    normalize(str).replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
  );
}
