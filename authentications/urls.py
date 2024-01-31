from django.urls import path
from . import views

urlpatterns = [
    path('registration_page/', views.registration_page),
    path('login/', views.login),
    path('homepage/', views.homepage),
]