f = open('data.txt', 'r').read().split('\n')
f.pop()

b, c, g = 0, 0, 0


def eh(e):
    return int(e)*-1


for d in range(len(f[0])):
    f.sort(key=eh)
    for x in f:
        if x[d] == '0':
            b += 1
        else:
            g += 1
    if b >= g:
        f = f[b-1::-1]
    else:
        f = f[b::1]
    c = 0
    b = g = 0
print(f)
'101111110011'
'000000000111'