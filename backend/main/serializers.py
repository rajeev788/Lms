from rest_framework import serializers
from .models import *

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        fields=['full_name','email','password','qualification','mobile_no','skills','teacher_courses','skill_list']
        depth=1
        model=Teacher
class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        fields='__all__'
        model=CourseCategory
       
class CourseSerializer(serializers.ModelSerializer):
    related_videos = serializers.SerializerMethodField()
    class Meta:
        fields=['id','category','teacher','title','description','featured_img','techs','course_chapters','related_videos','tech_list','category','total_enrolled_students']
        model=Course
        depth=1

    def get_related_videos(self, obj):
        related_courses = obj.related_videos()
        return CourseSerializer(related_courses, many=True).data

class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        fields='__all__'
        model=Chapter

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        fields='__all__'
        model=Student

class StudentEnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        fields=['course','student','enrolled_time']
        model=StudentcourseEnrollment
        depth=1