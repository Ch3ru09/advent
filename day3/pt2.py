f = open('data.txt', 'r').read().split('\n')
f.pop()

b, c, g = 0, 0, 0

for d in range(len(f[0])):
  f.sort(key=lambda e: int(e))
  for x in f:
    if x[d] == '1':
      b += 1
    else:
      g += 1
  if b < g:
    f = f[g::1]
  else:
    f = f[g-1::-1]
  c = 0
  b = g = 0
print(f)
print(int('101011011101', 2) * int('001110010111', 2))
