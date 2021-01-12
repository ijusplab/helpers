/**
 * Returns the user's timezone as stored in the native `Intl` object.
 */
export default function getUserTimeZone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
