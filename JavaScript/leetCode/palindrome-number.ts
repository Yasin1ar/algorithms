function isItPalindrome(number: number): boolean {
  if (number < 0) {
    return false;
  }

  let num = number;
  let palindrome = 0;

  while (num > 0) {
    palindrome = palindrome * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return palindrome === number;

}

console.log(isItPalindrome(121));