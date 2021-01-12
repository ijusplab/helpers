import type { table, cell } from './aliases';
import isDate from './isDate';

/**
 * Predicate that asserts if an array is a table of primitive values.
 * A table is an array of arrays of equal length. The inner arrays are rows and each position in a row corresponds to a column.
 * Values in a table are called cells. Cells may be read as follows: `table[row][column]`.
 *
 * @param o
 */
export default function isTable(o: unknown): o is table<cell> {
  const rowLength = Array.isArray(o) && Array.isArray(o[0]) ? o[0].length : -1;
  const isAllowedType = (value: unknown) => {
    return (
      typeof value === 'boolean' ||
      typeof value === 'number' ||
      typeof value === 'string' ||
      isDate(value) ||
      value === null ||
      value === undefined
    );
  };
  const isRow = (row: unknown[]) =>
    Array.isArray(row) && row.length === rowLength && row.every((cell) => isAllowedType(cell));
  return Array.isArray(o) && o.length > 0 && o.every(isRow);
}
