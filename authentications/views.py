from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def duration(request):
    return render(request, 'sign_up_page.html')

def login(request):
    return render(request, 'login_page.html')