module.exports = (start, end, jumpLength) => {
  if (start > end) {
    throw new Error('invalid input');
  }
  const count = Math.ceil((end - start) / jumpLength);
  return count;
};
