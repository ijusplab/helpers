import { isDate, isTable } from '../predicates';

export default function isTableOfDates(o: unknown): boolean {
  return isTable(o) && o.every((item) => item.every((cell) => isDate(cell)));
}
