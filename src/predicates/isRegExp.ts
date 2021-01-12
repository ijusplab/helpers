import toType from './toType';

export default function isRegExp(o: unknown): o is RegExp {
  return toType(o) === 'regexp';
}
