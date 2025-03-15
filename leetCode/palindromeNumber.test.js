const isItPalindrome = require('./palindromeNumber');

describe('test suite to valid the functionality of palindrome module', ()=>{
    it('should return false', ()=>{
        expect(isItPalindrome(346)).toBeFalsy();
    });
    it('should return true', ()=>{
        expect(isItPalindrome(121)).toBeTruthy();
    });
});