def fib(n: int) -> int:
    print(n)
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)


print(fib(6))