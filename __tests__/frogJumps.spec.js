const frogJumps = require('../lib/frogJumps');

// frog jumpin suites
describe('frogJump', () => {
  describe('when start is equal to end', () => {
    test('should return 0', () => {
      const result = frogJumps(10, 10, 5);
      expect(result).toEqual(0);
    });
  });

  describe('when start is less than end', () => {
    test('should return the number of jumps', () => {
      const result = frogJumps(0, 10, 5);
      expect(result).toEqual(2);
    });
  });

  describe('when start is greater than end', () => {
    test('should throw error', () => {
      function startGreaterThanEnd() {
        frogJumps(15, 10, 5);
      }
      expect(startGreaterThanEnd).toThrowError(/invalid/);
    });
  });

  describe('when jumpLength is greater than total distance', () => {
    test('should return 1', () => {
      const result = frogJumps(0, 10, 15);
      expect(result).toEqual(1);
    });
  });
});
