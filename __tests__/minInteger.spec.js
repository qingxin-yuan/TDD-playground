const minInteger = require('../lib/minInteger');

describe('return min missing integer from given array', () => {
  test('should return 5', () => {
    expect(minInteger([1, 3, 6, 4, 1, 2])).toEqual(5);
  });

  test('should return 4', () => {
    expect(minInteger([1, 3, 6, 1, 2])).toEqual(4);
  });

  test('should throw error', () => {
    expect(() => minInteger()).toThrow();
  });
  
});
