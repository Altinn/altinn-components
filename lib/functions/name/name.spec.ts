import { describe, expect, it } from 'vitest';
import { formatDisplayName } from './name.ts';

describe('formatDisplayName', () => {
  it('formats a simple person name', () => {
    expect(formatDisplayName({ fullName: 'TEST TESTESEN', type: 'person' })).toBe('Test Testesen');
  });

  it('formats a person name with reordering (surname first)', () => {
    expect(formatDisplayName({ fullName: 'TESTESEN TEST', type: 'person', reverseNameOrder: true })).toBe(
      'Test Testesen',
    );
  });

  it('formats a person name with hyphenated last name', () => {
    expect(formatDisplayName({ fullName: 'TEST TESTY-TEST', type: 'person' })).toBe('Test Testy-Test');
  });

  it('formats a company name and uppercases legal entity suffix', () => {
    expect(formatDisplayName({ fullName: 'test as', type: 'company' })).toBe('Test AS');
  });

  it('formats a company name and uppercases legal entity suffix', () => {
    expect(formatDisplayName({ fullName: 'WORK AS FRIENDS AS', type: 'company' })).toBe('Work As Friends AS');
  });

  it('handles company names with hyphenation and suffix', () => {
    expect(formatDisplayName({ fullName: 'test testy-test da', type: 'company' })).toBe('Test Testy-Test DA');
  });

  it('returns empty string for empty input', () => {
    expect(formatDisplayName({ fullName: '', type: 'person' })).toBe('');
  });

  it('preserves abbreviations with periods in company names', () => {
    expect(formatDisplayName({ fullName: 'A.B.C AS', type: 'company' })).toBe('A.B.C AS');
  });

  it('preserves multiple abbreviations in company name', () => {
    expect(formatDisplayName({ fullName: 'A.B.C X.Y.Z AS', type: 'company' })).toBe('A.B.C X.Y.Z AS');
  });

  it('preserves abbreviation and formats regular words in company name', () => {
    expect(formatDisplayName({ fullName: 'A.B.C consulting AS', type: 'company' })).toBe('A.B.C Consulting AS');
  });

  it('formats regular company name without abbreviations', () => {
    expect(formatDisplayName({ fullName: 'acme corporation AS', type: 'company' })).toBe('Acme Corporation AS');
  });

  it('preserves two-letter abbreviation with period', () => {
    expect(formatDisplayName({ fullName: 'A.B. services AS', type: 'company' })).toBe('A.B. Services AS');
  });

  it('does not treat long segments as abbreviations', () => {
    expect(formatDisplayName({ fullName: 'test.company AS', type: 'company' })).toBe('Test.company AS');
  });

  it('preserves and uppercases initials in person names', () => {
    expect(formatDisplayName({ fullName: 'TEST A.B.C', type: 'person' })).toBe('Test A.B.C');
    expect(formatDisplayName({ fullName: 'ola j. k. nordmann', type: 'person' })).toBe('Ola J. K. Nordmann');
  });

  describe('legal entity suffixes', () => {
    it.each(['se', 'fkf', 'kf', 'ks', 'iks', 'gfs', 'sf', 'hf', 'rhf', 'sti'])(
      'uppercases the "%s" suffix for companies',
      (suffix) => {
        expect(formatDisplayName({ fullName: `test ${suffix}`, type: 'company' })).toBe(`Test ${suffix.toUpperCase()}`);
      },
    );
  });

  describe('nobiliary particles', () => {
    it('lowercases particles when not the first word', () => {
      expect(formatDisplayName({ fullName: 'CHARLES DE GAULLE', type: 'person' })).toBe('Charles de Gaulle');
      expect(formatDisplayName({ fullName: 'LUDWIG VAN BEETHOVEN', type: 'person' })).toBe('Ludwig van Beethoven');
    });

    it('capitalizes a particle when it is the first word', () => {
      expect(formatDisplayName({ fullName: 'DE GAULLE CHARLES', type: 'person' })).toBe('De Gaulle Charles');
    });
  });

  describe('municipalities (kommuner)', () => {
    it('lowercases "kommune" for a single-word municipality', () => {
      expect(formatDisplayName({ fullName: 'OSLO KOMMUNE', type: 'company' })).toBe('Oslo kommune');
    });

    it('lowercases "kommune" for a multi-word place name', () => {
      expect(formatDisplayName({ fullName: 'NORDRE LAND KOMMUNE', type: 'company' })).toBe('Nordre Land kommune');
    });

    it('handles hyphenated municipality names', () => {
      expect(formatDisplayName({ fullName: 'NORD-AURDAL KOMMUNE', type: 'company' })).toBe('Nord-Aurdal kommune');
    });

    it('handles Norwegian characters in municipality names', () => {
      expect(formatDisplayName({ fullName: 'BÆRUM KOMMUNE', type: 'company' })).toBe('Bærum kommune');
      expect(formatDisplayName({ fullName: 'TRØNDELAG FYLKESKOMMUNE', type: 'company' })).toBe(
        'Trøndelag fylkeskommune',
      );
    });

    it('lowercases "fylkeskommune" for county municipalities', () => {
      expect(formatDisplayName({ fullName: 'VIKEN FYLKESKOMMUNE', type: 'company' })).toBe('Viken fylkeskommune');
    });

    it('lowercases the conjunction "og" in county municipality names', () => {
      expect(formatDisplayName({ fullName: 'MØRE OG ROMSDAL FYLKESKOMMUNE', type: 'company' })).toBe(
        'Møre og Romsdal fylkeskommune',
      );
      expect(formatDisplayName({ fullName: 'TROMS OG FINNMARK FYLKESKOMMUNE', type: 'company' })).toBe(
        'Troms og Finnmark fylkeskommune',
      );
    });

    it('keeps capitalizing subsequent words (e.g. sub-units)', () => {
      expect(formatDisplayName({ fullName: 'OSLO KOMMUNE UTDANNINGSETATEN', type: 'company' })).toBe(
        'Oslo kommune Utdanningsetaten',
      );
    });

    it('capitalizes "Kommune" when it is the first word of the name', () => {
      expect(formatDisplayName({ fullName: 'KOMMUNE TEST AS', type: 'company' })).toBe('Kommune Test AS');
    });

    it('capitalizes "Og" when it is the first word of the name', () => {
      expect(formatDisplayName({ fullName: 'OG TEST AS', type: 'company' })).toBe('Og Test AS');
    });

    it('does not lowercase generic nouns for person names', () => {
      expect(formatDisplayName({ fullName: 'OLA KOMMUNE', type: 'person' })).toBe('Ola Kommune');
    });
  });
});
