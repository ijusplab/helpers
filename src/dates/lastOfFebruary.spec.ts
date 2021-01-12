import lastOfFebruary from './lastOfFebruary';

describe('Testing lastOfFebruary...', () => {
  it('Shoud corretly point out the last day of february for the following years', () => {
    expect(lastOfFebruary(1940)).toBe(29);
    expect(lastOfFebruary(1941)).toBe(28);
    expect(lastOfFebruary(2044)).toBe(29);
    expect(lastOfFebruary(2043)).toBe(28);
    expect(lastOfFebruary(2020)).toBe(29);
    expect(lastOfFebruary(2021)).toBe(28);
    expect(lastOfFebruary(2022)).toBe(28);
    expect(lastOfFebruary(2023)).toBe(28);
    expect(lastOfFebruary(2024)).toBe(29);
    expect(lastOfFebruary(2025)).toBe(28);
    expect(lastOfFebruary(2026)).toBe(28);
    expect(lastOfFebruary(2027)).toBe(28);
    expect(lastOfFebruary(2028)).toBe(29);
  });
});
