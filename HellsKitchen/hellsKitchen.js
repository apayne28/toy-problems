let test = "what fuck damn cake";

const hellsKitchen = (string) => {
  let strCopy = string.toUpperCase();
  // 	let vowel = [eiou]
  let finalMessage = "";
  strCopy = strCopy
    .replace("A", "@")
    .replace("E", "*")
    .replace("I", "*")
    .replace("O", "*")
    .replace("U", "*");
  // strCopy = strCopy.replace(vowel, '*')

  strCopy = strCopy.split(" ");
  for (word in strCopy) {
    finalMessage += strCopy[word] + "!!!! ";
  }
  return finalMessage;
  return strCopy;
};

hellsKitchen(test);

let test = "what fuck damn cake";

const hellsKitchen = (string) => {
  let strCopy = string
    .toUpperCase()
    .replace(/[a]/gi, "@")
    .replace(/[eiou]/gi, "*")
    .split(" ")
    .map((str) => {
      return str + "!!!!";
    })
    .join(" ");

  return strCopy;
};

hellsKitchen(test);
