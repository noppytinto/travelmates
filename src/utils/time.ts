import { parseDate, Time } from "@internationalized/date";

export const APP_DEFAULT_INITIAL_TIME = new Time(8, 0);
export const APP_DEFAULT_INITAL_DATE = parseDate(getTodayDateString());
/**
 * get current time in HH:MM format
 *
 * @returns {string} current time in HH:MM format
 */
export function getCurrentTime() {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

/**
 * get ISO 8601 formatted date string for today
 *
 * @returns {string} ISO 8601 formatted date string for today
 */
export function getTodayDateString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
