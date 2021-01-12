import { isDate } from '../predicates';

export default function isValidDate(o: unknown): o is Date {
  return isDate(o) && !isNaN(o.valueOf());
}
