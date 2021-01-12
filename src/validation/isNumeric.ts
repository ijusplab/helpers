import { isNumber, isString } from '../predicates';

export default function isNumeric(o: unknown): boolean {
  if (isNumber(o)) return isFinite(o);
  if (isString(o)) return !isNaN(parseFloat(o));
  return false;
}
