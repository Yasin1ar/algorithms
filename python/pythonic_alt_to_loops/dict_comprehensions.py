# Using a for loop
squares = {}
for num in range(1, 6):
    squares[num] = num**2

# Using dict comprehension
squares = {num: num**2 for num in range(1, 6)}


""" Note : 
In the realm of Python programming, dictionary comprehensions aren’t just syntactic sugar, they’re powerhouses. 
They hold an edge over traditional for-loops thanks to Python’s under-the-hood performance optimizations. 
Just as list comprehensions do, dictionary comprehensions construct the entire data structure — in this case, 
a dictionary — in a single, efficient execution. 
Yet, it’s not without its caveats. When dealing with sizable datasets, these dictionary comprehensions could bite back, 
gobbling up significant chunks of memory and potentially triggering performance issues, like latency or sluggish system response. 
In such scenarios, a balance between memory management and processing efficiency becomes essential.
"""