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
  const obj = {};
  // let count = 0;

  array.map((el) => {
    // when element is not in the new array
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el] += 1;
    }
    return true;
  });
  console.log(obj);

  const keyValuePairs = Object.entries(obj);
  
};
