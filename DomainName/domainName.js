function domainName(url) {
  //Loop through string,
  //if index after / is letter, push to new string
  //stop at '.'
  let urlCopy = url;

  urlCopy = urlCopy.replace(/^(https?):\/\//, "").replace(/(www.)/, "");
  for (let i = 0; i < urlCopy.length; i++) {
    if (urlCopy[i] === ".") urlCopy = urlCopy.substring(0, i);
  }

  return urlCopy;
}

domainName("http://www.github.com/carbonfive/raygun");
domainName("http://www.zombie-bites.com");
domainName("https://www.cnet.com");
