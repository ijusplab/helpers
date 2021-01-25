import type { value } from './aliases';
import isBoolean from './isBoolean';
import isString from './isString';
import isNumber from './isNumber';
import isDate from './isDate';

export default function isValue(o: unknown): o is value {
  return isBoolean(o) || isString(o) || isNumber(o) || isDate(o);
}
