def is_subsequences(s:str, t:str) -> bool:
    s_len = len(s)
    t_len = len(t)
    si = 0
    ti = 0
    while ti < t_len:
        if t[ti] == s[si]:
            si += 1
        ti += 1
    return s_len == si

