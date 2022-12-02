f = open('data.txt', 'r').read().split(',')
f = [int(e) for e in f]

ref = []

for i in range(9):
    ref.append(f.count(i))

for i in range(256):
    a = ref[0]
    ref.pop(0)
    ref[6] += a
    ref.append(a)
sum = 0
for x in ref:
    sum += x
print(sum)
