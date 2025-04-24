#include <stdio.h>
#include <stdbool.h>

/**
 * Checks if a number is a palindrome (reads the same forwards and backwards).
 * 
 * @param x The number to check
 * @return true if the number is a palindrome, false otherwise
 */
bool is_palindrome(int x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) return false;

    int reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x /= 10;
    }

    return (x == reversed || x == reversed / 10);
}


int main() {
    int n = 1001;
    
    printf("%s\n", is_palindrome(n) ? "yes" : "no");
    
    return 0;
}