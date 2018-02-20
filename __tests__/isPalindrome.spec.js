const isPalindrome = require('../lib/isPalindrome');

describe('is palindrome', () => {
  describe('is palindrome for word', () => {
    test('should return true', () => {
      expect(isPalindrome('Mo m')).toBe(true);
    });
  });

  describe('is palindrome for word', () => {
    test('should return true', () => {
      expect(isPalindrome('never odd or even')).toBe(true);
    });
  });

  describe('invalid input', () => {
    test('should throw error', () => {
      expect(() => isPalindrome('  ')).toThrow();
    });
  });
});
