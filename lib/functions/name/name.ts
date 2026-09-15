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
 * entity suffixes and acronyms.
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
  // Nobiliary particles that stay lowercase in front of a name, e.g.
  // "Otto von Bismarck" or "Maria dos Santos".
  const particles = ['von', 'dos'];
  // Particles that only stay lowercase as part of a compound particle in front
  // of a name, e.g. "van der Berg", "von den Driesch" or "de la Cruz". Van, De
  // and Der are also given names (Vietnamese Văn, Chinese De, Armenian Der), and
  // "Ludwig van Beethoven" and "Nguyen Van Nam" are the same word in the same
  // position, so on their own they are capitalized.
  const compoundParticles = ['van', 'de', 'der', 'den', 'la', 'las', 'los'];
  const parts = fullName.trim().split(/\s+/);
  // A source that is already cased, e.g. "Ludwig van Beethoven", knows better
  // than us whether a word is a particle.
  const isCasedSource = fullName !== fullName.toUpperCase() && fullName !== fullName.toLowerCase();

  const isInitials = (word: string): boolean => {
    if (!word.includes('.')) return false;
    const segments = word.split('.').filter((seg) => seg.length > 0);
    return segments.length > 0 && segments.every((seg) => seg.length === 1);
  };

  // Words without vowels are acronyms, e.g. "DNB", "TV 2" or "Oslo VVS". Only
  // for companies, since a person can have a name without vowels, e.g. "Ng".
  const isAcronym = (part: string): boolean =>
    type === 'company' && !part.includes('.') && !/[aeiouyæøå]/iu.test(part.normalize('NFD'));

  // Capitalizes the first letter, and the letter after a one-letter prefix with
  // an apostrophe or after Mc, e.g. "O'Brien", "L'Oréal" or "McDonald". "Mac" is
  // left alone, since it also starts ordinary names like "Machado".
  const capitalize = (part: string): string =>
    (part.charAt(0).toUpperCase() + part.slice(1)).replace(
      /^(\p{L}['’]|Mc)(\p{L})(?=\p{L})/u,
      (_match: string, prefix: string, letter: string) => prefix + letter.toUpperCase(),
    );

  const isParticle = (word: string): boolean => {
    const lowerWord = word.toLowerCase();
    return particles.includes(lowerWord) || compoundParticles.includes(lowerWord);
  };

  const isLowercaseParticle = (idx: number): boolean => {
    const word = parts[idx];
    // A name should always start with a capital letter.
    if (idx === 0 || !isParticle(word)) return false;

    let end = idx;
    while (end < parts.length - 1 && isParticle(parts[end + 1])) end++;
    // A particle is always followed by a name, so particles at the end of the
    // name are names, e.g. "Ola Van".
    if (end === parts.length - 1) return false;

    if (isCasedSource) return word.charAt(0) !== word.charAt(0).toUpperCase();

    const isCompound = end > idx || isParticle(parts[idx - 1]);
    return isCompound || particles.includes(word.toLowerCase());
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

    // Keep nobiliary particles lowercase when we know they are particles.
    if (isLowercaseParticle(idx)) {
      return lowerWord;
    }

    // Preserve initials and write them in uppercase, e.g. "J. K." or company
    // names like "A.B.C AS". Abbreviations of words, like "St.", are capitalized.
    if (isInitials(word)) {
      return word.toUpperCase();
    }

    // Capitalize each part of words with a hyphen or a slash, e.g.
    // "Nordmann-Hansen", "SR-Bank" or "A/S".
    return lowerWord
      .split(/([-/])/)
      .map((part) => (isAcronym(part) ? part.toUpperCase() : capitalize(part)))
      .join('');
  };

  let words = parts.map(formatWord);

  if (type === 'person' && reverseNameOrder && words.length > 1) {
    const [first, ...rest] = words;
    words = [...rest, first];
  }

  return words.join(' ');
};
