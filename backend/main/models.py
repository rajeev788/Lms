from django.db import models

# Create your models here.
class Teacher(models.Model):
    full_name=models.CharField(max_length=300)
    email=models.EmailField()
    password=models.CharField(max_length=300)
    qualification=models.CharField(max_length=300)
    mobile_no=models.CharField(max_length=100)
    skills=models.TextField()
    class Meta:
        verbose_name_plural='1. Teachers'

class CourseCategory(models.Model):
    title=models.CharField(max_length=300)
    description=models.TextField()
    class Meta:
        verbose_name_plural='2 .Course Categories'

    def __str__(self):
        return self.title

class Course(models.Model):
    category=models.ForeignKey(CourseCategory,on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE)
    title=models.CharField(max_length=100)
    description=models.TextField()
    featured_img=models.ImageField(upload_to='course_imgs/',null=True,blank=True)
    techs=models.TextField(null=True,blank=True)


class Chapter(models.Model):
    course=models.ForeignKey(Course,on_delete=models.CASCADE)

    title=models.CharField(max_length=100)
    description=models.TextField()
    video=models.FileField(upload_to='chapter-videos/',null=True,blank=True)
    remarks=models.TextField(null=True,blank=True)


    

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