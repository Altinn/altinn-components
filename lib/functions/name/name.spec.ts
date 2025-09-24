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
});
