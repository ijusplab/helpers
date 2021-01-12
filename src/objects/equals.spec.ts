import samples from '../../test/_samples';
import edgeCases from '../../test/_edge-cases';
import equals from './equals';

describe('Testing equals...', () => {
  it('Should return true for two empty objects', () => {
    expect(equals({}, {})).toBe(true);
  });
  it('Should also be true for two empty arrays', () => {
    expect(equals({}, {})).toBe(true);
  });
  it('Should return true for all samples in relation to themselves', () => {
    samples.forEach((item) => {
      expect(equals(item, item)).toBe(true);
    });
  });
  it('Should also be true for all edge cases in relation to themselves', () => {
    edgeCases.forEach((item) => {
      expect(equals(item, item)).toBe(true);
    });
  });
  it('Should de true for two objects with same properties and values', () => {
    const a = { a: 1, b: 2, c: { d: 3, e: 4 } };
    const b = { a: 1, b: 2, c: { d: 3, e: 4 } };
    expect(equals(a, b)).toBe(true);
  });
  it('Should be false when at least one value is different', () => {
    const a = { a: 1, b: 2, c: { d: 3, e: 4 } };
    const b = { a: 1, b: 2, c: { d: 3, e: 5 } };
    expect(equals(a, b)).toBe(false);
  });
  it('Should be false when at least one property is different', () => {
    const a = { a: 1, b: 2, c: { d: 3, e: 4 } };
    const b = { a: 1, b: 2, c: { d: 3, f: 4 } };
    expect(equals(a, b)).toBe(false);
  });
  it('Shoulb be true for two arrays with the same items', () => {
    const a = ['', NaN, 1, { a: 1, b: 2, c: { d: 3, e: 4 } }];
    const b = ['', NaN, 1, { a: 1, b: 2, c: { d: 3, e: 4 } }];
    expect(equals(a, b)).toBe(true);
  });
  it('Should be false for two arrays with at least one different item', () => {
    const a = ['', NaN, 1, { a: 1, b: 2, c: { d: 3, e: 4 } }];
    const b = ['', NaN, 1, { a: 1, b: 2, c: { d: 3, e: 5 } }];
    expect(equals(a, b)).toBe(false);
  });
  it('Should be false when the order of the items is different', () => {
    const a = ['', NaN, 1, { a: 1, b: 2, c: { d: 3, e: 4 } }];
    const b = [NaN, '', 1, { a: 1, b: 2, c: { d: 3, e: 5 } }];
    expect(equals(a, b)).toBe(false);
  });
  it('Should be true for different types', () => {
    expect(equals('1', 1)).toBe(false);
    expect(equals(null, undefined)).toBe(false);
    expect(equals(NaN, undefined)).toBe(false);
  });
});
