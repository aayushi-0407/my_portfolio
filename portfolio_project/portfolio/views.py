from django.shortcuts import render
from .models import Skill, Education, Project, Experience, ContactInfo

def home(request):
    # For now, let's not worry about database objects
    # We'll use empty querysets to avoid database errors
    try:
        skills = Skill.objects.all()
        contact_info = ContactInfo.objects.first()
    except:
        skills = []
        contact_info = None
    
    context = {
        'skills': skills,
        'contact_info': contact_info,
    }
    return render(request, 'home.html', context)

def education(request):
    try:
        educations = Education.objects.all()
    except:
        educations = []
    
    context = {
        'educations': educations,
    }
    return render(request, 'education.html', context)

def projects(request):
    try:
        projects = Project.objects.all()
    except:
        projects = []
        
    context = {
        'projects': projects,
    }
    return render(request, 'projects.html', context)

def experience(request):
    try:
        experiences = Experience.objects.all()
    except:
        experiences = []
        
    context = {
        'experiences': experiences,
    }
    return render(request, 'experience.html', context)