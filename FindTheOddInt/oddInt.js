let test = [1, 1, 2, 2, 3, 3, 3];

// const findOddInt = (numbers) => {
//   let countObject = {};
//   for (let i = 0; i < numbers.length; i++) {
//     //check if current element is in countObj, if its in there, then inc by 1, if its not, don't increase by 1, set the value to 1
//     countObject.hasOwnProperty(numbers[i])
//       ? (countObject[numbers[i]] += 1)
//       : (countObject[numbers[i]] = 1);

//     if (countObject.hasOwnProperty(numbers[i])) {
//       countObject[numbers[i]] += 1;
//     } else {
//       countObject[numbers[i]] = 1;
//     }
//   }

//   // Go through object values and check if value is odd, and then return that number
//   for (var key in countObject) {
//     if (countObject[key] % 2 !== 0) {
//       return key;
//     }
//   }
//   return undefined
// };
let test = [1, 1, 2, 2, 3, 3, 3];

const findOddInt = (numbers) => {
  numbers.sort();
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i + 1]) {
      count++;
    } else {
      count++;
      if (count % 2 !== 0) {
        return numbers[i];
      }
      count = 0;
    }
  }
  return undefined;
};

findOddInt(test);
