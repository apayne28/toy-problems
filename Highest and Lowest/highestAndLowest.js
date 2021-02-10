// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

let test = "1 2 3 4 5 6";
let test2 = "-5 2 10 6 25";
let test3 = "1000 -2 17 25 4000 -325 20000000";

const highAndLow = (string) => {
  let strCopy = string.split(" ").map((strNum) => {
    return parseInt(strNum);
  });

  let min = strCopy[0];
  let max = strCopy[0];

  for (let i = 1; i < strCopy.length; i++) {
    if (min > strCopy[i]) {
      min = strCopy[i];
    }
    if (max < strCopy[i]) {
      max = strCopy[i];
    }
  }
  return `${max} ${min}`;
};

highAndLow(test);
