// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// [10,9,8,7,6] = [7, 9, 6 ,8 ,10]

let test = [5, 8, 6, 3, 4];

const sortOddInt = (numbers) => {
  let oddNums = numbers
    .filter((num) => num % 2 !== 0)
    .sort(function (a, b) {
      return a - b;
    });
  let oddCounter = 0;
  let numCopy = numbers.slice();

  for (let i = 0; i < numCopy.length; i++) {
    if (numCopy[i] % 2 != 0) {
      numCopy[i] = oddNums[oddCounter];
      oddCounter++;
    }
  }
  return numCopy;
};

sortOddInt(test);
