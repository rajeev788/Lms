from django.shortcuts import render

# Create your views here.
from .models import *
from .models import Teacher
from rest_framework import generics
from rest_framework.response import Response
from .serializers import *
from rest_framework import permissions
from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
class TeacherApi(generics.ListCreateAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    serializer_class=TeacherSerializer
    queryset=Teacher.objects.all()
class ChapterApi(generics.ListCreateAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    serializer_class=ChapterSerializer
    queryset=Chapter.objects.all()


class TeacherIdApi(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=TeacherSerializer
    queryset=Teacher.objects.all()


class CourseCategoryApi(generics.ListCreateAPIView):
    serializer_class=CourseCategorySerializer
    queryset=CourseCategory.objects.all()
class CourseCategoryIdApi(generics.ListCreateAPIView):
    serializer_class=CourseCategorySerializer
    queryset=CourseCategory.objects.all()

class CourseApi(generics.ListCreateAPIView):
    serializer_class=CourseSerializer

    queryset=Course.objects.all()
class TeacherCourseApi(generics.ListAPIView):
    serializer_class=CourseSerializer

    def get_queryset(self):
        teacher_id=self.kwargs['teacher_id']
        teacher=Teacher.objects.get(pk=teacher_id)
        return Course.objects.filter(teacher=teacher)
class CourseChapterApi(generics.ListAPIView):
    serializer_class=ChapterSerializer

    def get_queryset(self):
        course_id=self.kwargs['course_id']
        course=Course.objects.get(pk=course_id)
        return Chapter.objects.filter(course=course)




@csrf_exempt
def teacher_login(request):
    email = request.POST['email']
    password = request.POST['password']
    try:
        teacherData = Teacher.objects.get(email=email, password=password)
    except Teacher.DoesNotExist:
        return JsonResponse({'bool': False, 'error': 'Invalid email or password'}, status=400)
    
    if teacherData:
        return JsonResponse({'bool': True, 'teacher_id': teacherData.id})
    else:
        return JsonResponse({'bool': False, 'error': 'Invalid email or password'}, status=400)
