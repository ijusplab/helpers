import overlappingDays from './overlappingDays';

describe('Testing overlappingDays...', () => {
  it('Should return number of overlapping days betweeen two ranges', () => {
    expect(
      overlappingDays(new Date('2020-01-01'), new Date('2020-05-30'), new Date('2020-06-01'), new Date('2020-07-30'))
    ).toBe(0);
    expect(
      overlappingDays(new Date('2020-01-01'), new Date('2020-05-30'), new Date('2020-05-30'), new Date('2020-07-30'))
    ).toBe(1);
    expect(
      overlappingDays(new Date('2020-01-01'), new Date('2020-05-30'), new Date('2020-05-15'), new Date('2020-07-30'))
    ).toBe(16);
    expect(
      overlappingDays(new Date('2020-01-01'), new Date('2020-05-30'), new Date('2020-01-01'), new Date('2020-07-30'))
    ).toBe(151);
    expect(
      overlappingDays(new Date('2020-01-01'), new Date('2020-07-30'), new Date('2020-01-01'), new Date('2020-05-30'))
    ).toBe(151);
  });
  it('Should throw exception when parameters are invalid', () => {
    expect(() => overlappingDays(new Date('invalid'), new Date(), new Date(), new Date())).toThrow(
      'The function accepts valid dates only!'
    );
    expect(() => overlappingDays(new Date(), new Date('invalid'), new Date(), new Date())).toThrow(
      'The function accepts valid dates only!'
    );
    expect(() => overlappingDays(new Date(), new Date(), new Date('invalid'), new Date())).toThrow(
      'The function accepts valid dates only!'
    );
    expect(() => overlappingDays(new Date(), new Date(), new Date(), new Date('invalid'))).toThrow(
      'The function accepts valid dates only!'
    );
    expect(() => overlappingDays(new Date('2020-05-01'), new Date('2020-01-01'), new Date(), new Date())).toThrow(
      'Invalid period!'
    );
    expect(() => overlappingDays(new Date(), new Date(), new Date('2020-05-01'), new Date('2020-01-01'))).toThrow(
      'Invalid period!'
    );
  });
});
