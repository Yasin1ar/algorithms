
def longestCommonPrefix(strs: list[str]) -> str:
	"""
	Find the longest common prefix among a list of strings.

	Args:
		strs: A list of strings to find the common prefix for

	Returns:
		The longest common prefix as a string
	"""
	# Handle edge cases
	if not strs:
		return ""
	
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
