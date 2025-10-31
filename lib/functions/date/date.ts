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
    // Parse the date string (assumes YYYY-MM-DD format)
    const date = new Date(dateString);

    // Check if the date is valid
    if (Number.isNaN(date.getTime())) {
      return dateString; // Return original if invalid
    }

    // Format to Norwegian locale (DD.MM.YYYY)
    return date.toLocaleDateString('no-NO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  } catch (error) {
    console.warn('Error formatting date:', error);
    return dateString; // Return original if error occurs
  }
}
