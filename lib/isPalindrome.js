module.exports = (string) => {
  let original = string.toLowerCase();
  const array = original.split('').filter(e => e !== ' ');
  original = array.join('');

  if (!original) {
    throw new Error('invalid input');
  }

  const reversedArray = array.reverse();
  const reversed = reversedArray.join('');

  if (original === reversed) {
    return true;
  }

  return false;
};
