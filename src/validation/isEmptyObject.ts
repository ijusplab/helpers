import { isObject } from '../predicates';

// eslint-disable-next-line @typescript-eslint/ban-types
export default function isEmptyObject(o: unknown): o is object {
  return isObject(o) && Object.keys(o).length === 0;
}
