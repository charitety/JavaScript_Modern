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
  const array1 = [1, 2, 3, 4, 5];
  const array2 = ["a", "b", "c", "d", "e"];
  const array3 = [0, -1, -2, -3, -4];
  const array4 = ["a", "e", "i", "o", "u"];
  const array5 = ["a", "e", "i"];
  console.log(interleave(array1, array2));
  console.log(interleave(array3, array4));
  console.log(interleave(array4, array5));
};


const ex4 = () => {
  const string = ('month');
  const string2 = ('radar');
  const string3 = ('madame');
  console.log(palindrome(string));
  console.log(palindrome(string2));
  console.log(palindrome(string3));
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

const interleave = (array1, array2) => {
  let newString = "";
  //Check if the two arrays are the same length
  if (array1.length !== array2.length)
    //If they are not, display "ERROR: Array length mismatch"
    return "ERROR: Array length mismatch";
  //If the arrays are the same length continue and run a for loop

  // //Check first element of array1 and append it to a string
  
  // //Check first element of array2 and concatenate to the string
  
  // //Continue iterating and check the subsequent element of array1
  // //and the corresponding element of array2 and keep concatenating to the string
  
  // //Continue the process until all the elements of the array have been checked
  // //and concatenated
  
  // //Return string
  else {

    for (let i = 0; i < array1.length; i++) {
      newString = newString.concat(array1[i], array2[i]);
    }

    return newString;
  }
};


const palindrome = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] != string[string.length-1-i]) {
      return false;
    }
    else return true
  }
};



const main = async () => {
  ex4();
};

main();
