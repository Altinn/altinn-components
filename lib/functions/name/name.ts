interface FormatDisplayNameInput {
  /** Full name of person or company */
  fullName: string;
  /** Entity type: Whether this is a person or a company */
  type: 'person' | 'company';
  /** For persons: switch order of first/last name */
  reverseNameOrder?: boolean;
}

/**
 * Formats a display name for a person or company by applying title casing,
 * normalizing hyphenated words, and (for companies) uppercasing known legal
 * entity suffixes.
 *
 * For persons, you can optionally reorder the name by moving the first word
 * (often a surname) to the end.
 *
 * @param {FormatDisplayNameInput} input - The input object with full name, entity type, and options.
 * @returns {string} The formatted display name.
 *
 */
export const formatDisplayName = ({ fullName, type, reverseNameOrder }: FormatDisplayNameInput): string => {
  if (!fullName) return '';

  const legalEntityTypes = ['enk', 'as', 'da', 'sa'];
  let words = fullName
    .toLowerCase()
    .split(' ')
    .map((word) => {
      if (type === 'company' && legalEntityTypes.includes(word)) {
        return word.toUpperCase();
      }

      return word
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('-');
    });

  if (type === 'person' && reverseNameOrder && words.length > 1) {
    const [first, ...rest] = words;
    words = [...rest, first];
  }

  return words.join(' ');
};
