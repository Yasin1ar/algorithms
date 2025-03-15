function isItPalindrome(number) {
  if (number < 0) {
    return false;
  }
  var num = number;
  var palindrome = 0;
  while (num > 0) {
    palindrome = palindrome * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return palindrome === number;
}

module.exports = isItPalindrome;
