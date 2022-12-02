f = open('data.txt', 'r').read().split('\n')
f = list(map(lambda x:x.split('|'), f))
f = list(map(lambda x:[x[0].split(' '), x[1].split(' ')], f))
f = [[[a for a in i if a != ''] for i in e] for e in f]

def sub(str1, str2):
  out = ''
  for x in str1:
    if x not in str2:
      out += x
  return out

sum = 0
for x in f:
  # ref = ['' for x in range(7)]
  # x[0].sort(key=lambda x: len(x))
  # ref[0] = sub(x[0][1], x[0][0])
  # temp = [el for el in [sub(x[0][0], e) for e in [i for i in x[0] if len(i) == 6]] if el != ''][0]
  # ref[2] = temp
  # print(ref)
  for i in range(2):
    x[i] = [''.join(sorted(e)) for e in x[i]]
  x[0].sort(key=lambda e: len(e))
  ref= ['' for x in range(10)]
  ref[1] = x[0][0]
  ref[7] = x[0][1]
  ref[4] = x[0][2]
  ref[8] = x[0][-1]
  ref[6] = [e for e in x[0] if len(e) == 6 and len(sub(e, ref[1])) == 5][0]
  ref[3] = [e for e in x[0] if len(e) == 5 and len(sub(e, ref[1])) == 3][0]
  ref[2] = [e for e in x[0] if len(e) == 5 and len(sub(e, ref[4])) == 3][0]
  ref[5] = [e for e in x[0] if len(e) == 5 and len(sub(e, ref[6])) == 0][0]
  ref[9] = [e for e in x[0] if len(e) == 6 and len(sub(e, ref[3])) == 1][0]
  ref[0] = [e for e in x[0] if len(e) == 6 and len(sub(e, ref[5])) == 2][0]

  final = ''
  for e in x[1]:
    final += str(ref.index(e))
  sum += int(final)
print(sum)

"""
2: 1
3: 7
4: 4
5: 2, 3, 5
6: 0, 6, 9
7: 8
"""

# 807513
# 978171