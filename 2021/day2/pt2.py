f = open('data.txt', 'r').read().split('\n')
f.pop()
d, c, e = 0, 0, 0

for x in f:
    x = x.split(' ')
    a = x[0]
    b = int(x[1])
    if a == 'forward':
        d += b
        c += b*e
    elif a == 'up':
        e -= b
    elif a == 'down':
        e += b
    print(d, c)
print(d*c)
