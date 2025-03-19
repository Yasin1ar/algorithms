def longestCommonPrefix(strs: list[str]) -> str:
    first_item = strs[0]
    len_first_item = len(first_item)
    len_strs = len(strs)
    lcp = ""
    for i in range(len_first_item):
        for j in range(1, len_strs):
            if i >= len(strs[j]):
                return strs[j]
            if first_item[i] != strs[j][i]:
                return lcp
        lcp += first_item[i]

    return lcp

strs = ["fljyyy", "fl", "f", "flivi"]
print(longestCommonPrefix(strs))