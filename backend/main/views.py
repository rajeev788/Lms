from django.shortcuts import render
from django.shortcuts import get_object_or_404
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
class ChapterIdApi(generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    serializer_class=ChapterSerializer
    queryset=Chapter.objects.all()
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


class CourseIdApi(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=CourseSerializer

    queryset=Course.objects.all()
   

class CourseApi(generics.ListCreateAPIView):
    serializer_class=CourseSerializer

    queryset=Course.objects.all()
    def get_queryset(self):
        qs = super().get_queryset()
        if 'result' in self.request.GET:
            try:
                limit = int(self.request.GET['result'])
                qs = qs.order_by('-id')[:limit]
            except ValueError:
                pass  # handle the error or log it as necessary
        
        if 'category' in self.request.GET:
            category_slug = self.request.GET['category']
            qs = qs.filter(category__slug=category_slug)
        
        return qs
    
class TeacherCourseApi(generics.ListCreateAPIView):
    serializer_class=CourseSerializer

    def get_queryset(self):
        teacher_id=self.kwargs['teacher_id']
        teacher=Teacher.objects.get(pk=teacher_id)
        return Course.objects.filter(teacher=teacher)
   
class TeacherCourseIdApi(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=CourseSerializer
    queryset=Course.objects.all()
class CourseChapterApi(generics.ListAPIView):
    serializer_class=ChapterSerializer

    def get_queryset(self):
        course_id=self.kwargs['course_id']
        course=Course.objects.get(pk=course_id)
        return Chapter.objects.filter(course=course)


class StudentApi(generics.ListCreateAPIView):
    serializer_class=StudentSerializer
    queryset=Student.objects.all()

class StudentEnrollmentApi(generics.ListCreateAPIView):
    serializer_class=StudentEnrollmentSerializer
    queryset=StudentcourseEnrollment.objects.all()



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

@csrf_exempt
def student_login(request):
    email = request.POST['email']
    password = request.POST['password']
    try:
        studentData = Student.objects.get(email=email, password=password)
    except Student.DoesNotExist:
        return JsonResponse({'bool': False, 'error': 'Invalid email or password'}, status=400)
    
    if studentData:
        return JsonResponse({'bool': True, 'student_id': studentData.id})
    else:
        return JsonResponse({'bool': False, 'error': 'Invalid email or password'}, status=400)
    


def fetch_enroll_status(request, student_id, course_id):
    student = Student.objects.filter(id=student_id).first()
    course = Course.objects.filter(id=course_id).first()
    enrolledStatus = StudentcourseEnrollment.objects.filter(course=course, student=student).count()
    if enrolledStatus:
        return JsonResponse({'bool': True})
    else:
        return JsonResponse({'bool': False})

    


# class EnrolledStudentList(generics.ListAPIView):
#     serializer_class=StudentEnrollmentSerializer
#     queryset=StudentcourseEnrollment.objects.all()

#     def get_queryset(self):
#         if 'course_id' in self.kwargs:

#             course_id=self.kwargs['course_id']
#             course=Course.objects.get(pk=course_id)
#             return  StudentcourseEnrollment.objects.filter(course=course)
#         elif 'teacher_id' in self.kwargs:
#             teacher_id=self.kwargs['teacher_id']
#             teacher=Teacher.objects.get(pk=teacher_id)
#             return  StudentcourseEnrollment.objects.filter(course_teacher=teacher).distinct()

class EnrolledStudentList(generics.ListAPIView):
    serializer_class = StudentEnrollmentSerializer

    def get_queryset(self):
        course_id = self.kwargs.get('course_id')
        teacher_id = self.kwargs.get('teacher_id')

        if course_id:
            course = get_object_or_404(Course, pk=course_id)
            return StudentcourseEnrollment.objects.filter(course=course)
        
        if teacher_id:
            teacher = get_object_or_404(Teacher, pk=teacher_id)
            return StudentcourseEnrollment.objects.filter(course__teacher=teacher).distinct()
        
        return StudentcourseEnrollment.objects.none()