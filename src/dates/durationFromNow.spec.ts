import durationFromNow from './durationFromNow';
import { DURATION_TYPES } from '../enums';

describe('Testing durationFromNow...', () => {
  it('Should nicely inform durations from now', () => {
    const seconds = new Date();
    seconds.setSeconds(seconds.getSeconds() + 60);
    const minutes = new Date();
    minutes.setMinutes(minutes.getMinutes() + 10);
    const days = new Date();
    days.setDate(days.getDate() + 10);
    expect(durationFromNow(new Date(seconds))).toMatch(/há\s\d+\ssegundos/);
    expect(durationFromNow(new Date(minutes), DURATION_TYPES.MINUTES)).toMatch(/há\s\d+\sminutos/);
    expect(durationFromNow(new Date(days), DURATION_TYPES.DAYS)).toMatch(/há\s\d+\sdias/);
  });
  it('Should throw exceptions when date is invalid', () => {
    expect(() => durationFromNow(new Date('invalid'))).toThrow('Invalid date!');
  });
});
