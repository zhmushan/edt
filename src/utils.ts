import MarkdownIt from "markdown-it";

export const md = new MarkdownIt();

export function throttle<T extends (...args: U) => void, U extends Array<any>>(
  fn: T,
  ms: number,
) {
  let last = new Date().getTime();
  return function (...args: Parameters<T>) {
    const now = new Date().getTime();
    if (last + ms < now) {
      fn(...args);
      last = now;
    }
  };
}
