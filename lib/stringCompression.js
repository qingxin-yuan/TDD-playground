module.exports = (string) => {

  if (typeof(string) !== 'string'){
    throw new Error('invalid input type');
  }
  
  const array = string.split('');
  const newArray = [];
  let count = 0;

  array.map((el) => {
    // when element is not in the new array
    if (newArray.indexOf(el) === -1) {
      if (count !== 0) {
        newArray.push(count);
        count = 0;
      }
      newArray.push(el);
      count++;
    } else {
      count++;
    }
  });

  newArray.push(count);

  return newArray.join('');
};
