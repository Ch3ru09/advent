f = open('data.txt', 'r').read().split('\n')

ref = []
boards = []
buff = []
i = 0
for x in f:
    if i < 1:
        ref.append(f[0])
        i += 1
    else:
        buff.append([e for e in x.split(' ') if e])
        if x == '':
            buff.pop()
            boards.append(buff)
            buff = []
boards.pop(0)
ref = ref[0].split(',')

p = 0
stop = 0
a = 0
ans = []
winNum = 0
for x in ref:
    # getting every value in ref
    for i, e in enumerate(boards):
        if ans.count(e) < 1:
            for el in e:
                if x in el:
                    el[el.index(x)] += '-yes'
            temp = 0
            temp2 = 0
            for column in range(len(e[0])):
                for row in e:
                    for n in row:
                        if n.count('yes') > 0:
                            temp2 += 1
                    if temp2 == len(row):
                        if ans.count(e) < 1:
                            ans.append(e)
                    temp2 = 0
                    if row[column].count('yes') > 0:
                        temp += 1
                if temp == len(e):
                    if ans.count(e) < 1:
                        ans.append(e)
                temp = 0
    if len(boards) == len(ans) and stop == 0:
        winNum = int(x)
        a = ans[len(ans)-1]
        stop = 1
print(winNum)

oof = 0
for x in a:
    for e in x:
        if e.count('yes') == 0:
            oof += int(e)
print(oof)
