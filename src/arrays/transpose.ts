import type { cell, table } from '../predicates';
import { isTable } from '../predicates';

/**
 * Transposes a table or throws exception if input is not a table.
 *
 * @param table The table to be transposed
 */
export default function transpose(table: table<cell>): table<cell> {
  if (!isTable(table)) throw new Error('The input must be a table!');
  return table[0].map((_col, idx) => table.map((row) => row[idx]));
}
