# Using a for loop to check all
nums = [1, 2, 4, 8]
all_positive = True
for num in nums:
    if num <= 0:
        all_positive = False
        break

# Using all()
all_positive = all(num > 0 for num in nums)

# Using a for loop to check any
any_positive = False
for num in nums:
    if num > 0:
        any_positive = True
        break

# Using any()
any_positive = any(num > 0 for num in nums)

# note:
# They make the code concise and expressive, showing clearly the intention of the operation.