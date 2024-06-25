from django.urls import path
from .views import *
urlpatterns=[
    path('teacher',TeacherApi.as_view()),
    path('teacher/<int:pk>',TeacherIdApi.as_view()),
    
]