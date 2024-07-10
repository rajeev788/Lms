from django.urls import path
from .views import *
urlpatterns=[
    path('teacher',TeacherApi.as_view()),
    path('student',StudentApi.as_view()),
    path('student_enrollment',StudentEnrollmentApi.as_view()),
    path('teacher/<int:pk>',TeacherIdApi.as_view()),
    path('teacher-login',teacher_login),
    path('student-login',student_login),
    path('category',CourseCategoryApi.as_view()),
    path('course',CourseApi.as_view()),
    path('course-Id/<int:pk>',CourseIdApi.as_view()),
    path('chapter',ChapterApi.as_view()),
    path('chapter/<int:pk>',ChapterIdApi.as_view()),
    path('course-chapter/<int:course_id>',CourseChapterApi.as_view()),
    path('teacher-courses/<int:teacher_id>',TeacherCourseApi.as_view()),
    path('teacher-courses-Id/<int:pk>',TeacherCourseIdApi.as_view()),
    path('fetch-enroll-status/<int:student_id>/<int:course_id>',fetch_enroll_status),
    path('fetch-enrolled-students/<int:course_id>',EnrolledStudentList.as_view()),
    path('fetch-all-enrolled-students/<int:teacher_id>',EnrolledStudentList.as_view()),
]