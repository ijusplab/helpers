import normalize from './normalize';
import noSpaces from './noSpaces';

/**
 * Converts any string to `PascalCase`.
 * Throws exception if input is a not a string (througn the other functions invoked).
 *
 * @param str The input string
 */
export default function toPascalCase(str: string): string {
  return noSpaces(normalize(str).replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase()));
}
