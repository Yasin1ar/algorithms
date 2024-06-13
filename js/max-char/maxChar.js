// find the most used character in a given string

function findMaxChar(str) {
  let maxChar = "";
  let maxCharAcc = 1;
  for (let i = 0; i < str.length; i++) {
    let acc = 1;
    let char = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (char === str[j]) {
        acc++;
      }
    }
    if (acc > maxCharAcc) {
      maxChar = str[i];
      maxCharAcc = acc;
    } else if (acc === maxCharAcc) {
      maxChar += ", " + str[i];
      if (maxChar.split(", ").length === str.length + 1) {
        maxChar = "*";
      }
    }
  }
  return str + " : " + maxChar + " = " + maxCharAcc;
}

console.log(findMaxChar("yasin"));
console.log(findMaxChar("Madam"));
console.log(findMaxChar("hannah"));
