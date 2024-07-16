# Using a for loop
nums = [1, 2, 4, 8]
product = 1
for num in nums:
    product *= num

# Using reduce
from functools import reduce
product = reduce(lambda x, y: x * y, nums)


""" Note : 

reduce applies a binary function (one that takes two arguments) to the first two items in your sequence, 
then to the result and the next item, and so on.
It effectively 'reduces' your sequence to a single output
"""