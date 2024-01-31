from django import forms
from django.db import models


class RegistrationForm(forms.Form):
    first_name = forms.CharField(
        error_messages={'required': 'First Name is Required.',
                        'invalid': 'Custom error message for invalid input.'})
   
    last_name = forms.CharField(max_length=100)
    email = forms.EmailField()
    phone_number = forms.CharField(max_length=15)
    password = forms.CharField(widget=forms.PasswordInput)

    
