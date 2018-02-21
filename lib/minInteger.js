module.exports = (array) => {
  if(!array){
    throw newError('invalid input');
  }

  const obj = {};
  // const len = array.length;
  let element = 0;

  array.map((el) => {
    if (!obj[el]) {
      obj[el] = 1;
    }
  });
  const keys = Object.keys(obj);
  for (let i = 1; i < keys.length; i++) {
    const prev = Number(keys[i - 1]);
    if (Number(keys[prev]) + 1 !== Number(keys[i])) {
      element = Number(keys[i - 1]) + 1;
    }
    // prev = Number(keys[i]);
  }
  // console.log(obj, keys ,element);

  return element;
};
