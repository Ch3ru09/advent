f = open('data.txt', 'r').read().split('\n')
a, b, c, d = 0, 0, 0, 0
for x in range(len(f)-3):
    print(int(f[c]) + int(f[c+1]) + int(f[c+2]))
    d = int(f[c]) + int(f[c+1]) + int(f[c+2])
    if a < d:
        b += 1
    c += 1
    a = d
print(b-1)
