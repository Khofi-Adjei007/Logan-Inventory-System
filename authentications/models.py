from django.db import models

# Create your models here.
class UserRegistration(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=10)
    password = models.CharField


class UserLogin(models.Model):
    userName = models.CharField(max_length=255)
    staff_Id = models.CharField(max_length=20)
    userPassword = models.CharField(max_length=20)

class user(models.Model):
    pass