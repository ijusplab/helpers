import positionInCompetenceTable from './positionInCompetenceTable';

describe('Testing positionInCompetenceTable...', () => {
  const initial = new Date(2020, 0, 15);
  const final = new Date(2021, 2, 20);
  const table = [
    [new Date('2020-01-01T00:00')],
    [new Date('2020-02-01T00:00')],
    [new Date('2020-03-01T00:00')],
    [new Date('2020-04-01T00:00')],
    [new Date('2020-05-01T00:00')],
    [new Date('2020-06-01T00:00')],
    [new Date('2020-07-01T00:00')],
    [new Date('2020-08-01T00:00')],
    [new Date('2020-09-01T00:00')],
    [new Date('2020-10-01T00:00')],
    [new Date('2020-11-01T00:00')],
    [new Date('2020-12-01T00:00')],
    [new Date('2021-01-01T00:00')],
    [new Date('2021-02-01T00:00')],
    [new Date('2021-03-01T00:00')]
  ];
  it('Should find corretly the position of a date in the competence table', () => {
    expect(positionInCompetenceTable(table, initial)).toBe(0);
    expect(positionInCompetenceTable(table, final)).toBe(14);
    expect(positionInCompetenceTable(table, new Date(2020, 8, 20))).toBe(8);
  });
  it('Should throw exception if competence is out of range', () => {
    expect(() => positionInCompetenceTable(table, new Date(2021, 3, 20))).toThrow('Competence out of range!');
    expect(() => positionInCompetenceTable(table, new Date(2019, 11, 31))).toThrow('Competence out of range!');
  });
  it('Should throw exception if parameters are invalid', () => {
    expect(() => positionInCompetenceTable([], new Date(2021, 3, 20))).toThrow(
      'This function accepts a table of dates only!'
    );
    // @ts-expect-error Testing for errors now
    expect(() => positionInCompetenceTable([[1], [2]], new Date(2021, 3, 20))).toThrow(
      'This function accepts a table of dates only!'
    );
    expect(() => positionInCompetenceTable(table, new Date('invalid'))).toThrow('Competence must be a valid date!');
  });
});
