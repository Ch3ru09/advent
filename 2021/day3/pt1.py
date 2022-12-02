f = open('data.txt', 'r').read().split('\n')
f.pop()

b, c = 0, ''

for d in range(len(f[0])):
    for x in f:
        if x[d] == '1':
            b += 1
    if b > 500:
        c += '1'
    else:
        c += '0'
    b = 0
print(int(c, 2) * int(int(c, 2) ^ int('111111111111', 2)))
