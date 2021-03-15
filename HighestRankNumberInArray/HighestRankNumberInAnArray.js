// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  let counter = 1;
  let highestNum = 0;
  let highestCounter = 0;
  let sortedArray = arr.sort();

  for (let i = 0; i < sortedArray.length; i++) {
    sortedArray[i] === sortedArray[i + 1] ? (counter += 1) : (counter = 1);

    if (counter >= highestCounter) {
      if (counter === highestCounter && sortedArray[i] > highestNum) {
        highestNum = sortedArray[i];
      }
      if (counter > highestCounter) {
        highestCounter = counter;
        highestNum = sortedArray[i];
      }
      highestNum = sortedArray[i];
    }
  }

  return highestNum;
}

// MORE LINEAR SOLUTION
const FreqNum = (numArray) => {
  let highestNumber = 0;
  let highestCounter = 0;
  let record = {};

  for (let i of numArray) {
    record[i] = (record[i] || 0) + 1;
    if (record[i] > highestCounter) {
      highestCounter = record[i];
      highestNumber = i;
    }
  }
  return highestNumber;
};
