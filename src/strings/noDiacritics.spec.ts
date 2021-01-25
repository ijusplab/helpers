import noDiacritics from './noDiacritics';

describe('Testing noDiacritics...', () => {
  it('Should remove diacritics from a string', () => {
    const str = 'àÀáÁâÂãÃäÄå\n\rçÇèÈéÉêÊëËìÌíÍîÎïÏñÑ\n\r\tòÒóÓôÔõÕöÖùÙúÚûÛüÜÝýÿ';
    const res = 'aAaAaAaAaAa\n\rcCeEeEeEeEiIiIiIiInN\n\r\toOoOoOoOoOuUuUuUuUYyy';
    expect(noDiacritics(str)).toBe(res);
  });
  it('Should throw exception if input is not a string', () => {
    // @ts-expect-error Testing for errors now
    expect(() => noDiacritics(null)).toThrow('The input must be a string!');
  });
});
