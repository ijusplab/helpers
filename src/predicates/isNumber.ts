import toType from './toType';

export default function isNumber(o: unknown): o is number {
  return toType(o) === 'number';
}
