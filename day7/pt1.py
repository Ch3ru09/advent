import math
a = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]

sum = 0
for x in a:
    sum += x
print(math.floor(sum/2))
