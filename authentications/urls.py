from django.urls import path
from . import views

urlpatterns = [
    path('registration_page/', views.registration_page),
    path('login_page/', views.login_page),
    path('home_page/', views.homepage_page),
]