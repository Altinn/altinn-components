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

  it('ignores extra whitespace', () => {
    expect(formatDisplayName({ fullName: '  OLA   NORDMANN ', type: 'person' })).toBe('Ola Nordmann');
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
    it('lowercases compound particles in front of a name', () => {
      expect(formatDisplayName({ fullName: 'URSULA VON DER LEYEN', type: 'person' })).toBe('Ursula von der Leyen');
      expect(formatDisplayName({ fullName: 'JOHANNES VAN DEN BERG', type: 'person' })).toBe('Johannes van den Berg');
      expect(formatDisplayName({ fullName: 'MARIA DE LA CRUZ', type: 'person' })).toBe('Maria de la Cruz');
    });

    it('lowercases "von" and "dos" in front of a name', () => {
      expect(formatDisplayName({ fullName: 'OTTO VON BISMARCK', type: 'person' })).toBe('Otto von Bismarck');
      expect(formatDisplayName({ fullName: 'MARIA DOS SANTOS', type: 'person' })).toBe('Maria dos Santos');
    });

    it('capitalizes "van", "de" and "der" on their own, since they are also given names', () => {
      expect(formatDisplayName({ fullName: 'NGUYEN VAN NAM', type: 'person' })).toBe('Nguyen Van Nam');
      expect(formatDisplayName({ fullName: 'LIU DE HUA', type: 'person' })).toBe('Liu De Hua');
      expect(formatDisplayName({ fullName: 'ARAM DER HOVANESSIAN', type: 'person' })).toBe('Aram Der Hovanessian');
      expect(formatDisplayName({ fullName: 'LUDWIG VAN BEETHOVEN', type: 'person' })).toBe('Ludwig Van Beethoven');
    });

    it('capitalizes particles at the end of the name', () => {
      expect(formatDisplayName({ fullName: 'Ola Van', type: 'person' })).toBe('Ola Van');
      expect(formatDisplayName({ fullName: 'ANNA VAN DER', type: 'person' })).toBe('Anna Van Der');
      expect(formatDisplayName({ fullName: 'NGUYEN NAM VAN', type: 'person', reverseNameOrder: true })).toBe(
        'Nam Van Nguyen',
      );
    });

    it('capitalizes a particle when it is the first word', () => {
      expect(formatDisplayName({ fullName: 'DE GAULLE CHARLES', type: 'person' })).toBe('De Gaulle Charles');
      expect(formatDisplayName({ fullName: 'VAN DER BERG ANNA', type: 'person' })).toBe('Van der Berg Anna');
    });

    it('keeps the casing of particles from a source that is already cased', () => {
      expect(formatDisplayName({ fullName: 'Nguyen Van Nam', type: 'person' })).toBe('Nguyen Van Nam');
      expect(formatDisplayName({ fullName: 'Ludwig van Beethoven', type: 'person' })).toBe('Ludwig van Beethoven');
    });

    it('applies to person names within company names', () => {
      expect(formatDisplayName({ fullName: 'NGUYEN VAN NAM FRISØR', type: 'company' })).toBe('Nguyen Van Nam Frisør');
      expect(formatDisplayName({ fullName: 'VAN DER LIPPE HOLDING AS', type: 'company' })).toBe(
        'Van der Lippe Holding AS',
      );
    });
  });

  describe('apostrophes and prefixes', () => {
    it("capitalizes the letter after O', D' and Mc", () => {
      expect(formatDisplayName({ fullName: "CONAN O'BRIEN", type: 'person' })).toBe("Conan O'Brien");
      expect(formatDisplayName({ fullName: "ANNA D'ANGELO", type: 'person' })).toBe("Anna D'Angelo");
      expect(formatDisplayName({ fullName: 'RONALD MCDONALD', type: 'person' })).toBe('Ronald McDonald');
    });

    it('keeps a possessive apostrophe lowercase', () => {
      expect(formatDisplayName({ fullName: "MCDONALD'S NORGE AS", type: 'company' })).toBe("McDonald's Norge AS");
    });

    it('leaves "Mac" alone, since it also starts ordinary names', () => {
      expect(formatDisplayName({ fullName: 'ALEXANDER MACDONALD', type: 'person' })).toBe('Alexander Macdonald');
    });
  });

  describe('acronyms and abbreviations', () => {
    it('uppercases words without vowels in company names', () => {
      expect(formatDisplayName({ fullName: 'DNB BANK ASA', type: 'company' })).toBe('DNB Bank ASA');
      expect(formatDisplayName({ fullName: 'TV 2 AS', type: 'company' })).toBe('TV 2 AS');
      expect(formatDisplayName({ fullName: 'SR-BANK ASA', type: 'company' })).toBe('SR-Bank ASA');
    });

    it('does not uppercase person names without vowels', () => {
      expect(formatDisplayName({ fullName: 'WEI NG', type: 'person' })).toBe('Wei Ng');
    });

    it('capitalizes each part of a word with a slash', () => {
      expect(formatDisplayName({ fullName: 'A/S NORSKE SHELL', type: 'company' })).toBe('A/S Norske Shell');
    });

    it('capitalizes abbreviations of words, like "St."', () => {
      expect(formatDisplayName({ fullName: 'ST. OLAVS HOSPITAL HF', type: 'company' })).toBe('St. Olavs Hospital HF');
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
