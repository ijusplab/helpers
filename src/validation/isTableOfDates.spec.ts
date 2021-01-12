import isTableOfDates from './isTableOfDates';
import { range } from '../arrays';

describe('Testing isTableOfDates...', () => {
  it('Should correctly validate primitive types', () => {
    const booleanTable = range(10).map((x) => [x % 2 === 0, x % 2 !== 0, x < 5]);
    const stringTable = range(10).map((x) => [`${x}`, `${x + 1}`, `${x - 1}`]);
    const numberTable = range(10).map((x) => [x, x + 1, x - 1]);
    const dateTable = range(10).map((x) => [
      new Date(Date.now() + x * 10000),
      new Date(Date.now() - x * 10000),
      new Date(Date.now() + x * 20000)
    ]);
    const mixedTable = range(10).map((x) => [x % 2 === 0, `${x}`, x, new Date(Date.now() + x * 10000)]);
    expect(isTableOfDates(booleanTable)).toBe(false);
    expect(isTableOfDates(stringTable)).toBe(false);
    expect(isTableOfDates(numberTable)).toBe(false);
    expect(isTableOfDates(mixedTable)).toBe(false);
    expect(isTableOfDates(dateTable)).toBe(true);
  });
});
