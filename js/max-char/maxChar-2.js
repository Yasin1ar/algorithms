// find the most used character in a given string ex2

function findMaxChar(str) {
    let maxChar = '*';
    let maxCharAcc = 1;
    let charMap = {};
    for(let char of str){
        if(charMap[char]){
            charMap[char] = charMap[char] + 1;
            if(charMap[char] > maxCharAcc){
                maxChar = char;
                maxCharAcc = charMap[char];
            }
        } else {
            charMap[char] = 1;
        }
    }
    return maxChar + " : " + maxCharAcc;
  }
  
  console.log(findMaxChar("yasin"));
  console.log(findMaxChar("Madam"));
  console.log(findMaxChar("hannah"));
  