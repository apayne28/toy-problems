// In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

// - first remove all letter 'a', followed by letter 'b', then 'c', etc...
// - remove the leftmost character first.
// For example:
// solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
// solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
// solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b'
// solve('abracadabra', 8) = 'rdr'
// solve('abracadabra',50) = ''

// const simpleLetterRemoval = (string, number) => {
// 	if(number > string.length) {
//   	return ""
//   }
//   let strCopy = string.slice()
//   const strArray = Array.from(strCopy).sort()

// 	strArray = strArray.slice(strArray.length - 1 - number, strArray.length)

//  return strArray.sort((a, b) => {
//       return string.indexOf(a) < string.indexOf(b)
//   }).join("")
//   // we have our characters removed, string just needs to be in right order

// }

// #1
// 'wombat'
// 'abmotw', 3
// 'otw'
// -> sort, remove characters, do something to make it in order

// #2
// recursive function

// const simpleLetterRemoval = (string, number) => {
//   if (number > string.length) {
//     return "";
//   }
//   let strCopy = string.slice();
//   let strArray = Array.from(strCopy).sort();

//   strArray = strArray.slice(number, strArray.length);

//   return strArray
//     .sort((a, b) => {
//       return string.indexOf(a) - string.indexOf(b);
//     })
//     .join("");
// };
const simpleLetterRemoval = (string, number) => {
  if (number > string.length) {
    return "";
  }
  let strCopy = string.slice();
  let strArray = Array.from(strCopy).sort();

  strArray = strArray.slice(number, strArray.length);

  for (let i = 0; i < strArray.length; i++) {
    strArray.sort((a, b) => {
      return string.indexOf(a) - string.indexOf(b);
    });
  }

  return strArray.join("");
};

simpleLetterRemoval("wombat", 3);
