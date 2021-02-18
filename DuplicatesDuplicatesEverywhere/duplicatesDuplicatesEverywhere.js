// // You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.
// You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
// Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }
// Rules
// Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
// If duplicate characters are found in the same array, the first occurance should be kept.

let test = {
  1: ["A", "B", "C", "F"],
  2: ["A", "A", "B", "D"],
  100: ["C", "B", "A", "D"],
};

//come across duplicate
// put it into duplicate tracker
// delete track back to the original letter

const removeDuplicateIds = (obj) => {
  let duplicateTracker = [];
  let editedOutput = {};

  let sortedKeys = Object.keys(obj).sort((a, b) => b - a);
  // for loop through key values (letter arrays)
  // A - // if key doesnt exist in editedoutput, then add that key to editedoutput
  // B - // if letter doesnt exist in duplicate tracker(no sorting necessary),
  // C - add it to both editedoutput and duplicatetracker: if it does then skip over

  for (let i = 0; i < sortedKeys.length; i++) {
    let sortedKey = sortedKeys[i];

    for (let j = 0; j < obj[sortedKey].length; j++) {
      // A
      if (!editedOutput[sortedKey]) {
        editedOutput[sortedKey] = [];
      }
      //Get rid of empty arrays?
      // B
      if (duplicateTracker.indexOf(obj[sortedKey][j]) === -1) {
        // C
        duplicateTracker.push(obj[sortedKey][j]);
        editedOutput[sortedKey].push(obj[sortedKey][j]);
      }
    }
  }
  return editedOutput;
};

removeDuplicateIds(test);
