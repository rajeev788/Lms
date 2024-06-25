from django.db import models

# Create your models here.
class Teacher(models.Model):
    full_name=models.CharField(max_length=300)
    email=models.EmailField()
    password=models.CharField(max_length=300)
    qualification=models.CharField(max_length=300)
    mobile_no=models.CharField(max_length=100)
    address=models.TextField()
    class Meta:
        verbose_name_plural='1. Teachers'

class CourseCategory(models.Model):
    titile=models.CharField(max_length=300)
    description=models.TextField()
    class Meta:
        verbose_name_plural='2 .Course Categories'

class Course(models.Model):
    category=models.ForeignKey(CourseCategory,on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE)
    title=models.CharField(max_length=100)
    description=models.TextField()
    class Meta:
        verbose_name_plural='3. Courses'

class Student(models.Model):
    full_name=models.CharField(max_length=300)
    emai=models.EmailField()
    password=models.CharField(max_length=300)
    qualification=models.CharField(max_length=300)
    mobile_no=models.CharField(max_length=100)
    address=models.TextField()
    interested_categories=models.TextField()
    class Meta:
        verbose_name_plural='4. Students'