const stringCompression = require('../lib/stringCompression');

describe('string compression', () => {
  describe('test1', () => {
    test('should return a3b3c3', () => {
      expect(stringCompression('aaabbbccc')).toEqual('a3b3c3');
    });
  });

  describe('test2', () => {
    test('should return g1h1j2f2', () => {
      expect(stringCompression('ghjjff')).toEqual('g1h1j2f2');
    });
  });

  describe('input type validation', () => {
    test('should throw error', () => {
      expect(() => stringCompression(123)).toThrow();
    });
  });
});
