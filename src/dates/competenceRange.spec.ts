import competenceRange from './competenceRange';

describe('Testing competenceRange...', () => {
  const initial = new Date(2020, 0, 15);
  const final = new Date(2021, 2, 20);
  const table = [
    [new Date(2020, 0, 1)],
    [new Date(2020, 1, 1)],
    [new Date(2020, 2, 1)],
    [new Date(2020, 3, 1)],
    [new Date(2020, 4, 1)],
    [new Date(2020, 5, 1)],
    [new Date(2020, 6, 1)],
    [new Date(2020, 7, 1)],
    [new Date(2020, 8, 1)],
    [new Date(2020, 9, 1)],
    [new Date(2020, 10, 1)],
    [new Date(2020, 11, 1)],
    [new Date(2021, 0, 1)],
    [new Date(2021, 1, 1)],
    [new Date(2021, 2, 1)]
  ];
  it('Should return array of dates between two dates', () => {
    expect(competenceRange(initial, final)).toEqual(table.map((row) => row[0]));
  });
});
