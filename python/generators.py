# Using a for loop
nums = [1, 2, 4, 6]
squares = []
for num in nums:
    squares.append(num**2)

# Using a generator expression
squares = (num**2 for num in nums)


""" Notes :

The key advantage is that it generates values on the fly, conserving memory when handling large data sets.
While generators are great for saving memory, they can only be iterated over once,
Generators are memory-efficient, making them perfect for large datasets. 
They don’t compute all the values upfront; 
instead, they generate them on-the-fly. 
The downside? Generators can’t be reused. 
Once exhausted, you’ll have to create a new one.
"""

