import datetime
age = input("Please provide me with your age: ")

def yearsTo100(age):
    now = datetime.datetime.now()
    num_years = 100 - age
    year = now.year + num_years
    return year

print(f"You will be a 100 years old in the year {yearsTo100(age)}")

