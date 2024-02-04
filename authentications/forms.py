from django import forms
from django.db import models
import string

class RegistrationForm(forms.Form):

    first_name = forms.CharField(
        error_messages={'required': 'First Name is Required .',
                        'invalid': 'Name is Invalid.'})
   
    last_name = forms.CharField(
        error_messages={
                        'required': 'Last Name is Required',
                        'invalid': 'last name is invalid'})
    
    email = forms.EmailField(
        error_messages = {
                        'required': "email field can not be empty",
                        'invalid': "email does not exist"
        })
    

    phone_number = forms.CharField(
                        max_length=15,
                        error_messages={
                        'required': 'phone number cannot be empty',
                        'invalid': 'phone is invalid'
                        })
    
    password = forms.CharField(widget=forms.PasswordInput)
    repeat_password = forms.CharField(widget=forms.PasswordInput)



class LoginForm(forms.Form):
    userName = forms.CharField()
    staff_Id = forms.CharField()
    userPassword = forms.CharField()
   
    
    
