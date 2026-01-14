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

  it('does not affect person names with periods', () => {
    expect(formatDisplayName({ fullName: 'TEST A.B.C', type: 'person' })).toBe('Test A.b.c');
  });
});
