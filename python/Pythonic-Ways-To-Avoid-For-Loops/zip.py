names = ["John", "Jane", "Jim"]
fruits = ["apple", "banana", "orange"]

# Using a for loop
for i in range(len(names)):
    print(f"{names[i]} likes {fruits[i]}")

# Using zip()
for name, fruit in zip(names, fruits):
    print(f"{name} likes {fruit}")


""" Note : 
The elegance of zip lies in its simplicity. It forms pairs from two lists, making the code more readable. 
However, be aware of lists of different lengths - zip will stop at the end of the shortest list, so some elements might not be paired. 
zip is implemented as a built-in method at a lower level in C, it can be faster than a for loop, especially for bigger data sets.
"""