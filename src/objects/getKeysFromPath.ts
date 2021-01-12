/**
 * @ignore
 */
export default function getKeysFromPath(path: string): string[] {
  const validKeys = [/\w+/, /\w+(\[([\d]+)\])+/];
  path.split('.').forEach((item) => {
    if (validKeys.every((key) => !key.test(item))) {
      throw new Error('Invalid path!');
    }
  });
  const getIndexes = (item: string) => item.replace(/\]/g, '').split('[');
  const reducer = (arr: string[], item: string) => Array.prototype.concat(arr, getIndexes(item));
  return path.split('.').reduce(reducer, []);
}
