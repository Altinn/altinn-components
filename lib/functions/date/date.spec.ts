import { beforeEach, describe, expect, test, vi } from 'vitest';
import { formatDate } from './date';

describe('dateUtils', () => {
  beforeEach(() => {
    vi.stubEnv('TZ', 'UTC');
  });

  describe('formatDate', () => {
    test('should format ISO date to Norwegian DD.MM.YYYY format', () => {
      expect(formatDate('1990-12-25')).toBe('25.12.1990');
      expect(formatDate('2000-01-01')).toBe('01.01.2000');
      expect(formatDate('1985-06-15')).toBe('15.06.1985');

      vi.stubEnv('TZ', 'EST');

      expect(formatDate('1990-12-25')).toBe('25.12.1990');
      expect(formatDate('2000-01-01')).toBe('01.01.2000');
      expect(formatDate('1985-06-15')).toBe('15.06.1985');
    });

    test('should handle undefined input', () => {
      expect(formatDate(undefined)).toBeUndefined();
    });

    test('should handle invalid date strings', () => {
      expect(formatDate('invalid-date')).toBe('invalid-date');
      expect(formatDate('')).toBe(undefined);
    });

    test('should handle edge cases', () => {
      expect(formatDate('2024-02-29')).toBe('29.02.2024'); // Leap year
      expect(formatDate('2023-12-31')).toBe('31.12.2023');

      vi.stubEnv('TZ', 'EST');

      expect(formatDate('2024-02-29')).toBe('29.02.2024'); // Leap year
      expect(formatDate('2023-12-31')).toBe('31.12.2023');
    });
  });
});
