f = open('data.txt', 'r').read().split('\n')
f = list(map(lambda x:x.split('|'), f))

ref = []

for x in f:
  ref.append(x[1])
ref = [''.join(ref)][0].split(' ')

sum = 0
for x in ref:
  if len(x) in [2, 3, 4, 7]:
    sum += 1
print(sum)

