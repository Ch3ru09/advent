f = open('data.txt', 'r').read().split('\n')
a = b = 0
for x in f:
    if a < x:
        b += 1
    a = x
print(b)
