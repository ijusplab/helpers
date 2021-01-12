import toType from './toType';

export default function isDate(o: unknown): o is Date {
  return toType(o) === 'date';
}
