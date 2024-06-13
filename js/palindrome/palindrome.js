// Return True If the given string is palindrome ex1

function palindrome(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}

console.log(palindrome("yasin"));
console.log(palindrome("Madam"));
console.log(palindrome("hannah"));
