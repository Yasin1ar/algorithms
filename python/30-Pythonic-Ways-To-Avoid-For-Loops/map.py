# Using a for loop
squares = []
for num in range(10):
    squares.append(num**2)

# Using map
squares = list(map(lambda x: x**2, range(10)))

""" Notes :
lambda is just a quick-and-dirty way to define a function on the spot. 
And map is simply applying this function to each item in the range. 
Since map is handled at a lower level in C, it can be faster than a for loop, 
especially for bigger data sets.

Using map makes your code concise and clearly states your intention: 'apply this function to all items in my list'
"""