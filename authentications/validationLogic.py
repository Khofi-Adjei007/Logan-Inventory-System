import string
import csv

"""
Password Validation System by Khofi_adjei
This program validates a user password characters to make sure it meets accurate security
By convention:
a strong password must be at least 8 or more characters long
must be a combination of uppercases, special characters and numbers.
"""


class signup_password_validation:
    """ Initialize the class"""

    def __init__(self, user_password_input):
        self.user_password_input = user_password_input

    # Signup Password Validation method
    def password_validation(self):
        in_list_1 = False
        in_list_2 = False
        in_list_3 = False

    # Variables to retrieve and store characters to be checked for
        special_chars = string.punctuation
        num_chars = string.digits
        upercase_chars = string.ascii_uppercase

        if len(self.user_password_input) < 8:
            print(
                "\nRequirement Fail!\nCharacters Must Be At Least Eight (8) charcters long")

    # Loop to inspect and verify the characters
        for chars in self.user_password_input:
            if chars in special_chars:
                in_list_1 = True
            elif chars in num_chars:
                in_list_2 = True
            elif chars in upercase_chars:
                in_list_3 = True

        if in_list_1 and in_list_2 and in_list_3:
            print("Requirment Success!\n")
        else:
            print(
                "Password Must Contain At Least\nA special Charcter \nA Number \nAnd An UpperCase")


user_password_input = input("Enter your password: ")
Validation = signup_password_validation(user_password_input)
Validation.password_validation()