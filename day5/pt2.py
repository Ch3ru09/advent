f = open('data.txt', 'r').read().split('\n')

x1, y1, x2, y2, = [], [], [], []

for e in f:
  a = e.split(' -> ')

  start = a[0].split(',')
  finish = a[1].split(',')

  x1.append(start[0])
  y1.append(start[1])
  x2.append(finish[0])
  y2.append(finish[1])

import numpy as np
m = np.zeros((1000, 1000), dtype=int)

for i in range(len(x1)):
  pos1 = [int(x1[i]), int(y1[i])]
  pos2 = [int(x2[i]), int(y2[i])]

  
  a1 = abs(pos1[0] - (pos2[0])) + 1
  if pos1[0] < pos2[0]:
    bx = pos1[0]
    by = pos1[1]
  else:
    bx = pos2[0]
    by = pos2[1]

  # if x didn't change
  if pos1[0] == pos2[0]:
    if pos1[1] < pos2[1]:
      ay1 = pos1[1]
      ay2 = pos2[1]
    else:
      ay1 = pos2[1]
      ay2 = pos1[1]
    for index in range(ay1, ay2+1):
      m[pos1[0], index] += 1
  # if y didn't change
  elif pos1[1] == pos2[1]:
    if pos1[0] < pos2[0]:
      ax1 = pos1[0]
      ax2 = pos2[0]
    else:
      ax1 = pos2[0]
      ax2 = pos1[0]
    for index in range(ax1, ax2+1):
      m[index, pos1[1]] += 1
  # \
  
  elif (pos2[1] - pos1[1])/(pos2[0] - pos1[0]) == 1:
    for n in range(a1):
      m[bx+n, by+n] += 1
  # /
  elif (pos2[1] - pos1[1])/(pos2[0] - pos1[0]) == -1:
    for n in range(a1):
      m[bx+n, by-n] += 1


sum = np.sum(m > 1)
print(sum)