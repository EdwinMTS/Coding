# input = input("Please provide me with a string and I'll check if the string is a palindrome: ")
input = "meetsysteem"
list = []
for char in input:
    list.append(char)

print(list)
reverse = list
reverse.reverse()
print(reverse)
if (reverse == list):
    print(f"The word {input} is a palindrome!")
else:
    print(f"The word {input} is not a palindrome!")
