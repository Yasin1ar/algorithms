fruits = ['apple', 'banana', 'orange']

# Using a for loop
for i in range(len(fruits)):
    print(f"I got fruit number {i+1}: {fruits[i]}")

# Using enumerate()
for i, fruit in enumerate(fruits, start=1):
    print(f"I got fruit number {i}: {fruit}")
    
    
    
""" Note :
In this case, enumerate spares us from manually keeping track of the index. 
It neatly packs each element into a tuple with its index, so we can use them directly in the loop.
"""