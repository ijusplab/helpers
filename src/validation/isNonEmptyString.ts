import { isString } from '../predicates';

export default function isNonEmptyString(o: unknown): boolean {
  return isString(o) && o.trim().length > 0;
}
