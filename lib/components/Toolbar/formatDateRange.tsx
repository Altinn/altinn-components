/**
 * Formats a date range into a human-readable string.
 * Examples (nb-NO locale):
 * - "1. mai–3. juni 2024"
 * - "1.–15. juni 2024"
 * * @param fromDate - ISO string "YYYY-MM-DD"
 * @param toDate - ISO string "YYYY-MM-DD"
 * @param locale - BCP 47 language tag (defaults to Norwegian Bokmål)
 */

function isValidDateString(dateString: string): boolean {
  if (!dateString || dateString === '') {
    return false;
  }

  // 1. Check the format using a regular expression (YYYY-MM-DD)
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) {
    return false;
  }

  // 2. Parse the string and validate the date components
  const [yearStr, monthStr, dayStr] = dateString.split('-');
  const year = Number.parseInt(yearStr, 10);
  const month = Number.parseInt(monthStr, 10); // Month is 1-indexed for parsing
  const day = Number.parseInt(dayStr, 10);

  // JavaScript's Date constructor interprets YYYY-MM-DD strings as UTC by default
  // or local time if the timezone is specified, which can lead to issues with
  // specific string formats and timezones.
  // A more reliable way is to manually use the constructor with components.
  // Note: JS months are 0-indexed (Jan=0, Feb=1, etc.).
  const dateObj = new Date(year, month - 1, day);

  // Check if the Date object is valid AND if its components match the input
  // The Date object might "overflow" invalid dates (e.g., new Date(2021, 1, 31)
  // results in March 3rd). This check prevents that.
  const isValidDate =
    !Number.isNaN(dateObj.getTime()) && // Check if date is not "Invalid Date"
    dateObj.getFullYear() === year &&
    dateObj.getMonth() + 1 === month && // Add 1 back to month for comparison
    dateObj.getDate() === day;

  return isValidDate;
}

// Extend the Intl.DateTimeFormat interface to include formatRange
interface DateTimeFormatterWithRange extends Intl.DateTimeFormat {
  formatRange?(startDate: Date, endDate: Date): string;
}

export function formatDateRange(fromDate?: string, toDate?: string, locale = 'nb-NO'): string {
  const start = fromDate && isValidDateString(fromDate) ? new Date(fromDate) : undefined;
  const end = toDate && isValidDateString(toDate) ? new Date(toDate) : undefined;

  // Configure the formatter
  const formatter = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }) as DateTimeFormatterWithRange;

  if (start && end && formatter.formatRange) {
    return formatter.formatRange(start, end);
  }

  if (start) {
    return formatter.format(start);
  }

  return '';
}
