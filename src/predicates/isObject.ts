import toType from './toType';

// eslint-disable-next-line @typescript-eslint/ban-types
export default function isObject(o: unknown): o is object {
  if (o !== null && o !== undefined) {
    return toType(o) === 'object';
  }
  return false;
}
