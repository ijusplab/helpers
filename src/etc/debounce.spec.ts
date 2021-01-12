import debounce from './debounce';

jest.useFakeTimers();

describe('Testing debounce', () => {
  it('Should execute just once', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 500);
    debouncedFunc();
    jest.advanceTimersByTime(250);
    debouncedFunc();
    jest.runAllTimers();
    expect(func).toBeCalledTimes(1);
  });
  it('Should execute just once with immediate === true', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 500, true);
    debouncedFunc();
    jest.advanceTimersByTime(250);
    debouncedFunc();
    jest.runAllTimers();
    expect(func).toBeCalledTimes(1);
  });
});
