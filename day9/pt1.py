import numpy as np
f = open('data.txt', 'r').read().split('\n')
f = [list(e) for e in f]
f = np.array(f)


ans = []
for x in f:
  smol = []
  for i in range(len(x)):
    if i == 0 or i == len(x)-1: 
      a = int(((i/(len(x)-1))*2)-1)
      if x[i] < x[i-a]:
        smol.append(i)
    else:
      a = int(((i/(len(x)-1))*2)-1)
      if x[i] < x[i+1] and x[i] < x[i-1]:
        smol.append(i)
  ans.append(list(dict.fromkeys(smol)))
sum = 0

for i in range(len(ans)):
  for x in ans[i]:
    z = int(x)
    if i == 0 or i == len(ans)-1:
      a = int(((i/(len(ans)-1))*2)-1)
      if x in ans[i-a]:
        sum += min(int(f[i][z]), int(f[i-a][z]))+1
    elif x in ans[i-1] and x in ans[i+1]:
      sum += min(int(f[i][z]), int(f[i-1][z]), int(f[i+1][z]))+1
    elif x in ans[i-1]:
      sum += min(int(f[i][z]), int(f[i-1][z]))+1
    elif x in ans[i+1]:
      sum += min(int(f[i][z]), int(f[i+1][z]))+1
print(sum)
# 491
# 6809
# 5715