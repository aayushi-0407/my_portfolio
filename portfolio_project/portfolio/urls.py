from django.urls import path
from . import views

app_name = 'portfolio'

urlpatterns = [
    path('', views.home, name='home'),
    path('education/', views.education, name='education'),
    path('projects/', views.projects, name='projects'),
    path('experience/', views.experience, name='experience'),
]