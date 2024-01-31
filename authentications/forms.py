from django import forms
from django.db import models


class RegistrationForm(forms.Form):
    first_name = forms.CharField(
        error_messages={'required': 'First Name is Required .',
                        'invalid': 'Name is Invalid.'})
   
    last_name = forms.CharField(
        error_messages={
                        'required': 'Last Name is Required',
                        'invalid': 'last name is invalid'})
    
    email = forms.EmailField()
    phone_number = forms.CharField(max_length=15)
    password = forms.CharField(widget=forms.PasswordInput)
    repeat_password = forms.CharField(widget=forms.PasswordInput)
    
