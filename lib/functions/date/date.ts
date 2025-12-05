/**
 * Formats a date string in ISO format (YYYY-MM-DD) to Norwegian standard format (DD.MM.YYYY)
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Formatted date string in standard Norwegian format
 */
export function formatDate(dateString: string | undefined): string | undefined {
  if (!dateString) {
    return undefined;
  }

  try {
    const [year, month, day] = dateString.split('-');
    if (!year || !month || !day) return dateString;

    return `${day}.${month}.${year}`;
  } catch (error) {
    console.warn('Error formatting date:', error);
    return dateString;
  }
}
