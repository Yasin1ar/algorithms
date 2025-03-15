// https://leetcode.com/problems/is-subsequence/description/
#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool is_subsequence(char *s, char *t)
{
    if (*s == *t)
    {
        return true;
    }

    int si = 0;
    int sl = strlen(s);
    for (int ti = 0; ti < sl - 1; ti++)
    {
        if (t[ti] == s[si])
        {
            si++;
        }
    }

    return si == sl - 1;
}
int main()
{
    char s[] = "abc";
    char t[] = "abc";

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