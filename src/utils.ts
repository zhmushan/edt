import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

import "highlight.js/styles/github.css";

export const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ""; // use external default escaping
  },
});

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
