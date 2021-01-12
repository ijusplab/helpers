import isSameDate from './isSameDate';

describe('Testing isSameDate...', () => {
  it('Should inform correctly if the date is equal to another', () => {
    expect(isSameDate(new Date('1806-01-01'), new Date('1806-01-01'))).toBe(true);
    expect(isSameDate(new Date('1806-01-01'), new Date('1806-02-01'))).toBe(false);
  });
});
