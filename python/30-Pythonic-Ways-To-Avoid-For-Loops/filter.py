# Using a for loop
nums = [1, 2, 4, 8]
evens = []
for num in nums:
    if num % 2 == 0:
        evens.append(num)

# Using filter
evens = list(filter(lambda x: x % 2 == 0, nums))


""" Note : 
Just like map, filter applies a function to each item in a sequence. But instead of transforming the item, 
it uses the function to decide whether to keep or discard the item. 
Since the filter function is handled at a lower level in C, 
it can be faster than a for loop, especially for bigger data sets.
"""