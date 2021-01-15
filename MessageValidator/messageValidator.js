// In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

// For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

const testString = "4code13hellocodewars";

const messageValidator = (string) => {
  //Split the string into numbers and strings, then check if the number in front of the string matches the number of characters in the string. If it does, return true
  let stringLength = "";
  let stringLengthCount = 0;

  if (isNaN(parseInt(string.charAt(0)))) {
    return false;
  }

  for (var i = 0; i < string.length; i++) {
    // Establish stringLengthCount when we reach end of number
    // Once we reach a new number, keep track of that index, and then once we reach the end of that number, use substring to set stringLengthCount
    if (!isNaN(parseInt(string[i])) && !isNaN(parseInt(string[i + 1]))) {
      //if next character is number
      stringLength += string[i];
    } else if (
      !isNaN(parseInt(string.charAt(i))) &&
      isNaN(parseInt(string.charAt(i + 1)))
    ) {
      //if next character is not number
      stringLength += string[i];
      stringLength = parseInt(stringLength);
    } else {
      // current element is a string
      stringLengthCount += 1;
      // return false if stringLength is not equal to stringLengthCount AND end of string
      if (
        stringLength != stringLengthCount &&
        (!string[i + 1] || !isNaN(parseInt(string[i + 1])))
      ) {
        return false;
      } else if (
        stringLength === stringLengthCount &&
        (!string[i + 1] || !isNaN(parseInt(string[i + 1])))
      ) {
        stringLengthCount = 0;
        stringLength = "";
      }
    }
  }
  return true;
};

messageValidator(testString);
