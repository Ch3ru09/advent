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

# can use ref and boards now


def check(list1, val):
    for x in list1:
        if val > x:
            return False
    return True


for x in ref:
    # getting every value in ref
    if p != 0:
        break
    for e in boards:
        for el in e:
            if x in el:
                el[el.index(x)] = -1
        temp = 0
        for column in range(len(e[0])):
            for row in e:
                if row.count(-1) == len(row):
                    print(e)
                    p += 1
                elif row[column] == -1:
                    temp += 1
            if temp == len(e):
                print(e)
                p += 1
                temp = 0
