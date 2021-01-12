import toType from './toType';

export default function isString(o: unknown): o is string {
  return toType(o) === 'string';
}
