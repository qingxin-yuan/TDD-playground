// function to return the first unique character in a string

module.exports = (string) => {
  if (typeof string !== 'string') {
    throw new Error('invalid input type');
  }

  // const array = string.split('');
  // const newArray = [];

  // let prev = array[0];
  // let next = array[2];
  // const newArray = [];

  // // for (let i = 1; i < array.length - 1; i++) {
  // //   if (array[i] !== next && array[i] !== prev) {
  // //     newArray.push(array[i]);

  // //   }
  // //   prev = array[i];
  // //   next = array[i + 2];
  // // }
  // array.map(el=>{
  //   newArray.push(el);

  // })
  // return ans;
  // return string;

  const array = string.split('');
  const newArray = [];
  let count = 0;

  array.map((el) => {
    // when element is not in the new array
    if (newArray.indexOf(el) === -1) {
      if (count !== 0) {
        newArray[newArray.length - 1] = count;
        // newArray.push(count);
        count = 0;
      }
      newArray.push(el);
      newArray.push(1);
      count += 1;
    } else {
      // newArray.push(0);
      const i = newArray.findIndex(element => element === el);
      // console.log(i, newArray[i + 1]);
      newArray[i + 1] = newArray[i + 1] + 1;
      count += 1;
    }
    return true;
  });
  newArray[newArray.length - 1] = count;

  // console.log(newArray);

  const index = newArray.findIndex(el => el === 1);
  if (index !== -1) {
    return newArray[index - 1];
  }
  return undefined;
};
