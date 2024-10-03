n = int(input(">>> "))

dic = {3:0,5:0,7:0,10:0}
for x in dic:
    sch = 0
    res = 0
    while res + x <= n:
       res += x
       sch += 1          
    dic[x] = sch
    
print(dic)