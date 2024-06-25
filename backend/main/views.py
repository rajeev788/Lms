from django.shortcuts import render

# Create your views here.
from .models import *
from rest_framework import generics
from rest_framework.response import Response
from .serializers import *
from rest_framework import permissions

class TeacherApi(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class=TeacherSerializer
    queryset=Teacher.objects.all()


class TeacherIdApi(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=TeacherSerializer
    queryset=Teacher.objects.all()
    