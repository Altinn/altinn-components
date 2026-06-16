import type { AvatarType } from '../../components';

interface FormatDisplayNameInput {
  /** Full name of person or company */
  fullName: string;
  /** Entity type: Whether this is a person, system user or a company */
  type: AvatarType;
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

  const legalEntityTypes = [
    'enk',
    'as',
    'da',
    'sa',
    'asa',
    'ba',
    'ans',
    'sti',
    'nuf',
    'se',
    'fkf',
    'kf',
    'ks',
    'iks',
    'gfs',
    'sf',
    'hf',
    'rhf',
  ];
  // Common Norwegian nouns/conjunctions that should stay lowercase when they
  // appear after the first word, e.g. "Oslo kommune", "Viken fylkeskommune"
  // and "Møre og Romsdal fylkeskommune".
  const lowercaseWords = ['kommune', 'fylkeskommune', 'og'];
  // Nobiliary particles that stay lowercase when they are not the first word,
  // e.g. "Charles de Gaulle" or "Ludwig van Beethoven".
  const nobiliaryParticles = ['von', 'van', 'der', 'de', 'la', 'dos'];
  const parts = fullName.split(' ');

  const isAbbreviation = (word: string): boolean => {
    if (!word.includes('.')) return false;
    const segments = word.split('.').filter((seg) => seg.length > 0);
    return segments.length > 0 && segments.every((seg) => seg.length <= 3);
  };

  const formatWord = (word: string, idx: number): string => {
    const isLastWord = idx === parts.length - 1;
    const lowerWord = word.toLowerCase();

    if (type === 'company' && isLastWord && legalEntityTypes.includes(lowerWord)) {
      return lowerWord.toUpperCase();
    }

    // Keep generic nouns/conjunctions lowercase, but never as the first word
    // (a name should always start with a capital letter).
    if (type === 'company' && idx > 0 && lowercaseWords.includes(lowerWord)) {
      return lowerWord;
    }

    // Keep nobiliary particles lowercase, but never as the first word.
    if (idx > 0 && nobiliaryParticles.includes(lowerWord)) {
      return lowerWord;
    }

    // Preserve initials/abbreviations and write them in uppercase, e.g. "J. K."
    // or company names like "A.B.C AS".
    if (isAbbreviation(word)) {
      return word.toUpperCase();
    }

    return lowerWord
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('-');
  };

  let words = parts.map(formatWord);

  if (type === 'person' && reverseNameOrder && words.length > 1) {
    const [first, ...rest] = words;
    words = [...rest, first];
  }

  return words.join(' ');
};
