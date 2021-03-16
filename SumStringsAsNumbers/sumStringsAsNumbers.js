// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a, b) {
  //convert to int, add, return
  if (a === "") {
    a = "0";
  } else if (b === "") {
    b = "0";
  }
  return (+a + +b).toLocaleString("fullwide", { useGrouping: false });
}

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a, b) {
  //convert to int, add, return
  // let intA = parseInt(a)
  // let intB = parseInt(b)
  // let intC = intA + intB

  // return intC.toString()

  return (BigInt(+a) + BigInt(+b)).toLocaleString("fullwide", {
    useGrouping: false,
  });
}

sumStrings("3", "5");
sumStrings("712569312664357328695151392", "8100824045303269669937");
// Expected: '712577413488402631964821329',
// instead got: '7.125774134884027e+26'
