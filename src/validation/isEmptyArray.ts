export default function isEmptyArray(o: unknown): o is Array<unknown> {
  return Array.isArray(o) && o.length === 0;
}
