def fib(n: int, cache_fib={}) -> int:
    if type(n) != int or n < 0:
        print("Must provide a valid Natural number")
        return -1
    elif n < 2:
        return n
    elif n in cache_fib:
        return cache_fib[n]
    else:
        cache_fib[n - 1] = fib(n - 1)
        cache_fib[n - 2] = fib(n - 2)
    return cache_fib[n - 1] + cache_fib[n - 2]
