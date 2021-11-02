import datetime
name = input('Please provide me with your name: ')
age = input("Please provide me with your age: ")
randomNumber = int(input('Please provide me with a random number: '))
age = int(age)

def yearsTo100(age):
    now = datetime.datetime.now()
    num_years = 100 - age
    year = now.year + num_years
    return year

while (not randomNumber == 0):
    print(f"{name} will be a 100 years old in the year {yearsTo100(age)}")
    randomNumber -= 1

