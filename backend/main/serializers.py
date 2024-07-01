from rest_framework import serializers
from .models import *

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        fields='__all__'
        model=Teacher
class CourseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        fields='__all__'
        model=CourseCategory

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        fields='__all__'
        model=Course
class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        fields='__all__'
        model=Chapter
