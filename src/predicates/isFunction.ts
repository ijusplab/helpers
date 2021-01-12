import toType from './toType';

// eslint-disable-next-line @typescript-eslint/ban-types
export default function isFunction(o: unknown): o is Function {
  return toType(o) === 'function';
}
