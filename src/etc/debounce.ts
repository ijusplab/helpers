/**
 * See: https://davidwalsh.name/javascript-debounce-function
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param func
 * @param wait
 * @param immediate
 */
export default function debounce(
  func: (...args: unknown[]) => unknown,
  wait: number,
  immediate = false
): (...args: unknown[]) => unknown {
  let timeout: NodeJS.Timeout | null;
  return function (...args: unknown[]) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout as NodeJS.Timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
}
