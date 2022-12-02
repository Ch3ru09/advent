import statistics
f = open('data.txt', 'r').read().split(',')
f = [int(e) for e in f]
f.sort()

a = statistics.multimode(f)[0]

ans = []

for i in range(2000):
  sum = 0
  for x in f:
    sum += abs(x-i)
  ans.append(sum)
ans.sort()
print(ans[0])
# 459335
# 339321