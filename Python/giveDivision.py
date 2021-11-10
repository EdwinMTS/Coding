num = input("Please provide me a number and I will give back all the number you can divide it by: ")
num = int(num)
check_num = list(range(1, num + 1))
dividable = []

for div in check_num:
    if(num % div == 0):
        dividable.append(div)

for num in dividable:
    print(num)