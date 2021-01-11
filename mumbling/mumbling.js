// This time no story, no theory.
// The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = (letters) => {
  let accumString = "";
  for (i = 0; i < letters.length; i++) {
    accumString +=
      letters[i].toUpperCase() + letters[i].toLowerCase().repeat(i);
    if (i < letters.length - 1) {
      accumString += "-";
    }
  }
  return accumString;
};

//ANOTHER SOLUTION
const accm = (input) => {
  output = "";
  arr = input.split("");
  arr.forEach((letter, index) => {
    output += letter.toUpperCase();
    for (let x = 0; x <= index; x++) {
      output += letter.toLowerCase();
    }
    if (index < input.length - 1) {
      output += "-";
    }
  });
  return output;
};

//BETTER SOLUTION
const accum = (input) => {
  return input
    .split("")
    .map((letter, index) => {
      return letter.toUpperCase() + letter.toLowerCase().repeat(index);
    })
    .join("-");
};
