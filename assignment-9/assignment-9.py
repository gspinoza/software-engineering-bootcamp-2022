# Assignment 9 by Gabriel Espinza


# PART A
print("---------- PART A ----------")

mylist = ['Forest','Grassland','Tundra','Desert']
print('List 1 =',mylist,"\n")

mylist2 = mylist[1: ] # Slicing
print('List 2 (after assigning values from 1 to end) =',mylist2)
mylist2.append("Freshwater") # append new item
print('List 2 (after appending new item) =',mylist2)
del mylist2[2] # remove 3rd item
print('List 2 (after removing 3rd item) =',mylist2,"\n")

mylist3 = mylist
print('List 3 =',mylist3)


# PART B
print("---------- PART B ----------")
months = ['January','February','March','April','May','June','July','August','September','October','November','December']
one_sentence = "The quick brown fox jumps over the lazy dog."
two_sentences = "The fox is quick. \n The fox is brown."
myString1 = "   Apple   "
myString2 = ",,,,,rrttgg.....Banana....rrr"
myString3 = "apple#banana#cherry#orange#banana"

# The count() method returns the number of elements with the specified value.
print(myString3.count("banana"))

# The startswith() method returns True if the string starts with the specified value, otherwise False.
print(one_sentence.startswith("The"))

# The string.endswith(value, start, end) method returns True if the string ends with the specified value, otherwise False.
print(one_sentence.endswith('.'))

# The index() method finds the first occurrence of the specified value.
print(months.index('October'))

# The find() method returns -1 if the value is not found. (See example below)
print(one_sentence.find('fox'))

# The join() method takes all items in an iterable and joins them into one string.
# A string must be specified as the separator.
print(" -> ".join(months))

# The replace() method replaces a specified phrase with another specified phrase.
print(myString3.replace("#"," | "))

# The split() method splits a string into a list.
print(myString3.split("#"))

# The splitlines() method splits a string into a list. The splitting is done at line breaks.
print(two_sentences.splitlines())

# The strip() method removes any leading (spaces at the beginning) and trailing (spaces at the end) characters (space is the default leading character to remove)
print(myString1.strip())
print(myString2.strip(",.grt"))


# # PART C
print("---------- PART C ----------")
def check_if_prime(n):
    if n > 1:
        # iterate from 2 to n/2
        for i in range(2, n//2):
            # not prime if n is divisible by any number between 2 & n/2
            if (n % i) == 0:
                print(n, "is not a prime number")
                break
        else:
            print(n, "is a prime number!")
    else:
        print(n, "is not a prime number")

check_if_prime(7)
check_if_prime(10)
check_if_prime(5)


# PART D
print("---------- PART D ----------")

def disStuInfo(schoolID,*firstName,**lastEmail):
    for i, item in enumerate(lastEmail):
        print(schoolID)
        print(firstName[i])
        print(item)
        print(lastEmail[item],"\n")


names = ['Jim', 'Jose', 'Jack']
emails = {'Beam' : 'JBeam@gmail.com', 'Cuervo' : 'JCuervo@gmail.com', 'Daniels' : 'JDaniels@gmail.com'}
disStuInfo(1001,*names, **emails)