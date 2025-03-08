# Traditional loop
old_array = [1, 2, 4, 8]
new_array = []
for i in old_array:
    if i < 5:
        new_array.append(i)

# Pythonic array\list comprehension
new_array = [i for i in old_array if i < 5]

""" Notes :

List comprehension shines in its simplicity and elegance
In terms of performance, both are comparable, but the list comprehension version tends to run a bit faster due to internal optimizations.
Because list comprehensions produce a list all at once, they can be memory intensive when dealing with large data sets. 
In situations where you’re working with a large amount of data, using a list comprehension could potentially fill up your memory,
leading to performance issues or even causing your program to crash, however, they work perfectly with small data sets.
"""
