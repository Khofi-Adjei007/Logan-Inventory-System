from django import forms
from django.db import models
import string
from django.contrib.auth.forms import UserCreationForm

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
    username = forms.CharField(
        error_messages={'required': 'Username is required.',
                        'invalid': 'Invalid username.'})
    
    password = forms.CharField(
        widget=forms.PasswordInput,
        error_messages={'required': 'Password is required.'})
    


class homePageForm(forms.Form):
    pass