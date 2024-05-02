const BASE_URL = "https://restcountries.com";
const API_VERSION = "v3.1";
export const SEGMENT_ALL = "all";
export const SEGMENT_NAME = "name";

export const buildUrl = (...path: string[]) => {
  return `${BASE_URL}/${API_VERSION}/${path.join("/")}`;
};

export function buildQuery(query: string) {}

export function debounce(fn: Function, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
