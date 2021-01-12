import { isNumber } from '../predicates';

/**
 * Validates hours, minutes, seconds and milliseconds, checking if all parameters are numbers and are within the correct range.
 *
 * @param hours
 * @param minutes
 * @param seconds
 * @param milliseconds
 */
export default function validTimeParameters(
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number
): boolean {
  if (!isNumber(hours) || !isNumber(minutes) || !isNumber(seconds) || !isNumber(milliseconds)) return false;
  if (
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59 ||
    seconds < 0 ||
    seconds > 59 ||
    milliseconds < 0 ||
    milliseconds > 999
  )
    return false;
  return true;
}
