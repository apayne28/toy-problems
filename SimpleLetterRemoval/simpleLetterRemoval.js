// In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

// - first remove all letter 'a', followed by letter 'b', then 'c', etc...
// - remove the leftmost character first.
// For example:
// solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
// solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
// solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b'
// solve('abracadabra', 8) = 'rdr'
// solve('abracadabra',50) = ''

const simpleLetterRemoval = (string, number) => {
  if (number > string.length) {
    return "";
  }
  let strCopy = string.slice();
  let strArray = Array.from(strCopy).sort();

  strArray = strArray.slice(number, strArray.length);

  return strArray
    .sort((a, b) => {
      return string.indexOf(a) - string.indexOf(b);
    })
    .join("");
};

simpleLetterRemoval("abracadabra", 2);
simpleLetterRemoval("wombat", 3);

//Revised Solution
const simpleLetterRemoval = (string, number) => {
  // If number is bigger than string length, return blank
  if (number > string.length) {
    return "";
  }

  //Grab unwanted chars
  let removedChars = string.split("").sort().join("").slice(0, number);

  //Go through and delete unwanted chars from string
  for (let i = 0; i < number + 1; i++) {
    string = string.replace(removedChars[i], "");
  }
  return string;
};
simpleLetterRemoval("abracadabra", 2);
simpleLetterRemoval("wombat", 3);
