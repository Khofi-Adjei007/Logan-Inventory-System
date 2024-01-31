from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.shortcuts import redirect
from .forms import RegistrationForm


# Create your views here.
def registration_page(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            # Process form data
            # For example, save user to database
            # user = form.save()
            return render(request, 'registration_success.html')
    else:
        form = RegistrationForm()
    return render(request, 'registration_page.html', {'form': form})



def login(request):
    return render(request, 'login_page.html')



def homepage(request):
    return render(request, 'home_page.html')





