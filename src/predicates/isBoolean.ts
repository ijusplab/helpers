import toType from './toType';

export default function isBoolean(o: unknown): o is boolean {
  return toType(o) === 'boolean';
}
