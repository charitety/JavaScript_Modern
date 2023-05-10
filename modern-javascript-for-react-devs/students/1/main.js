//
// File: main.js
// Date: 5/24/2022
//

const ex1 = () => {
  const array = [1, "2", 3, "test", 1.2];
  const array2 = ["hi", "gray", false, true, "maria", 1, 14, true];
  console.log(countNumbers(array));
  console.log(countNumbers(array2));
};

const ex2 = () => {
  const array = [12, 55, 2, 22, 11];
  const array2 = [4, 1.2, 3, 4];
  const array3 = [8, -1, 14, 100, -2, 5];
  console.log(minNumber(array));
  console.log(minNumber(array2));
  console.log(minNumber(array3));
};

const ex3 = () => {
  // TODO...
};

//
// Your functions here...
//

const countNumbers = (array) => {
  let retval = 0;
  array.forEach((num) => {
    if (typeof num === "number") {
      retval++;
    }
  });
  return retval;
};

const minNumber = (array) => {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
};

const main = async () => {
  ex2();
};

main();
