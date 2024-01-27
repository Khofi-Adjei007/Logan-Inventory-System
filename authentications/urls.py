from django.urls import path
from . import views

urlpatterns = [
    path('duration/', views.duration),
    path('login/', views.login),
    path('homepage/', views.homepage)
]