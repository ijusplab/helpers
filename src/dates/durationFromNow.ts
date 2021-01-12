import dateDiff from './dateDiff';
import { isValidDate } from '../validation';
import { getUserLocale } from '../locale';
import { DURATION_TYPES } from '../enums';

/**
 * Like Moment's `fromNow()`. Uses Javascript's native `Intl` API.
 *
 * Usage:
 * ```
 * console.log(durationFromNow(new Date(), DURATION_TYPES.SECONDS, 'pt-BR'));
 * // Output: agora
 * ```
 *
 * @param date
 * @param durationType If omitted, `DURATION_TYPES.SECONDS` will be used.
 * @param locale A Unicode BCP 47 locale identifier, like "pt-BR" or "en-US". If omitted, the user's locale will be used.
 */
export default function durationFromNow(
  date: Date,
  durationType: DURATION_TYPES = DURATION_TYPES.SECONDS,
  locale: string = getUserLocale()
): string {
  if (!isValidDate(date)) throw new Error('Invalid date!');
  const diff = dateDiff(date, new Date(), durationType);
  const formatter = new Intl.RelativeTimeFormat(locale, { style: 'long', numeric: 'auto' });
  return formatter.format(diff, durationType);
}
