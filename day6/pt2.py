f = open('data.txt', 'r').read().split(',')

f = [int(e) for e in f]

# for i in range(256):
#   for x in range(len(f)):
#     if f[x] > 0:
#       f[x] -= 1
#     elif f[x] == 0:
#       f[x] = 6
#       f.append(8)
# print(len(f))

for i in range(256):
  f.sort(key=lambda e: -int(e))
  if 0 in f:
    find = f.index(0)
    f[find::1] = [6 for x in f[find::1]]
    f[find-1::-1] = [x-1 for x in f[find-1::-1]] 
    f += [8] * (len(f)-find)
  else:
    f = [x-1 for x in f]
print(len(f))