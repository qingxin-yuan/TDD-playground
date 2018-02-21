const uniqueChar = require('../lib/uniqueChar');

describe('unique character func testing', () => {
  test('input: dddeeefggghhh, should return f', () => {
    expect(uniqueChar('dddeeefggghhh')).toEqual('f');
  });
  test('should return r', () => {
    expect(uniqueChar('frof')).toEqual('r');
  });
  test('should return t', () => {
    expect(uniqueChar('terfg')).toEqual('t');
  });
  test('should return undefined', () => {
    expect(uniqueChar('tttttt')).toEqual(undefined);
  });
});
