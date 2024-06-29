# Using a for loop
nums = [1, 2, 4, 8]
for i in range(len(nums)):
    print(nums[i])

# Using *
print(*nums)


""" Note :
Here, *nums is equivalent to taking each element out of the list nums and passing them as separate arguments to the print function. 
It's like magically unpacking a suitcase of items in one swift move. 
If it was a dictionary, you could unpack it with **nums in order to do the same.
"""