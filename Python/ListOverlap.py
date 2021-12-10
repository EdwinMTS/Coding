from ast import Index


list1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
common_items = []

for item1 in list1:
    for item2 in list2:
        if (item1 in common_items):
            pass
        elif(item1 == item2):
            common_items.append(item1)


print(common_items)

