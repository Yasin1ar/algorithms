// https://leetcode.com/problems/is-subsequence/description/
#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool is_subsequence(char *s, char *t)
{
    if (s == NULL || t == NULL) {
        return false; // Both strings must be non-null
    }

    int si = 0; 
    int sl = strlen(s); 
    int tl = strlen(t); 

    for (int ti = 0; ti < tl && si < sl; ti++) {
        if (t[ti] == s[si]) {
            si++;
        }
    }

    return si == sl; // Return true if all characters in s were found in order
}
int main()
{
    char s[] = "yasin";
    char t[] = "ygalsissn";

    if (is_subsequence(s, t))
    {
        printf("%s is a subsequence of %s\n", s, t);
    }
    else
    {
        printf("%s is not a subsequence of %s\n", s, t);
    }

    return 0;
}