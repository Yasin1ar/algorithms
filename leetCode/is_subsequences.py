def is_subsequences(s:str, t:str) -> bool:
    s_len = len(s)
    t_len = len(t)
    si = 0
    ti = 0
    for ti in range(t_len):
        if si == s_len:
            break
        if t[ti] == s[si]:
            si += 1
    return s_len == si