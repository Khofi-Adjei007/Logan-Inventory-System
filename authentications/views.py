from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.shortcuts import redirect
from .forms import RegistrationForm, LoginForm, homePageForm
import string
from django.views import View


# Create your views here.
def registration_page(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save_to_database()
            return render(request, 'registration_success.html')
    else:
        form = RegistrationForm()
    return render(request, 'registration_page.html', {'form': form})




def login_page(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password,)
            if user is not None:
                login(request, user)
                # Redirect to a success page or any other page you want
                return redirect('success_page')
            else:
                # Authentication failed
                form.add_error(None, "Invalid username or password.")
    else:
        form = LoginForm()
    return render(request, 'login_page.html', {'form': form})



def homepage_page(request):
    if request.method == 'POST':
        form = homePageForm(request.POST)
    return render(request, 'home_page.html')





