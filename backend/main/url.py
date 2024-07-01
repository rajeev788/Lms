from django.urls import path
from .views import *
urlpatterns=[
    path('teacher',TeacherApi.as_view()),
    path('teacher/<int:pk>',TeacherIdApi.as_view()),
    path('teacher-login',teacher_login),
    path('category',CourseCategoryApi.as_view()),
    path('course',CourseApi.as_view()),
    path('chapter',ChapterApi.as_view()),
    path('course-chapter/<int:course_id>',ChapterApi.as_view()),
    path('teacher-courses/<int:teacher_id>',TeacherCourseApi.as_view()),
    
]