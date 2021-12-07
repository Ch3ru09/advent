f = open('data.txt', 'r').read().split('\n')

for x in f:
    x = x.split(' ')
    d = x[0]
    a = x[1]
