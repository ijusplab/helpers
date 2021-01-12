/**
 * Returns the user's locale as stored in the native `Intl` object.
 */
export default function getUserLocale(): string {
  return Intl.DateTimeFormat().resolvedOptions().locale;
}
