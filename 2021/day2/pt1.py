f = open('data.txt', 'r').read().split('\n')
f.pop()
d, c = 0, 0

for x in f:
    x = x.split(' ')
    a = x[0]
    b = int(x[1])
    if a == 'forward':
        d += b
    elif a == 'up':
        c -= b
    elif a == 'down':
        c += b
    print(d, c)
print(d*c)
