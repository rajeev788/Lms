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

    def skill_list(self):
        skill_list=self.skills.split(',')
        return skill_list

class CourseCategory(models.Model):
    title=models.CharField(max_length=300)
    description=models.TextField()
    class Meta:
        verbose_name_plural='2 .Course Categories'

    def __str__(self):
        return self.title

class Course(models.Model):
    category=models.ForeignKey(CourseCategory,on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,related_name='teacher_courses')
    title=models.CharField(max_length=100)
    description=models.TextField()
    featured_img=models.ImageField(upload_to='course_imgs/',null=True,blank=True)
    techs=models.TextField(null=True,blank=True)
    def related_videos(self):
        related_videos = Course.objects.filter(techs__icontains=self.techs).exclude(id=self.id)
        return related_videos
    def tech_list(self):
        tech_list=self.techs.split(',')
        return tech_list
    def total_enrolled_students(self):
        total_enrolled_students=StudentcourseEnrollment.objects.filter(course=self).count()
        return total_enrolled_students
class Chapter(models.Model):
    course=models.ForeignKey(Course,on_delete=models.CASCADE,related_name='course_chapters')

    title=models.CharField(max_length=100)
    description=models.TextField()
    video=models.FileField(upload_to='chapter-videos/',null=True,blank=True)
    remarks=models.TextField(null=True,blank=True)


    



class Student(models.Model):
    full_name=models.CharField(max_length=300)
    email=models.EmailField()
    username=models.CharField(max_length=300)
    password=models.CharField(max_length=300)
    interest=models.CharField(max_length=100)
    def __str__(self):
        return self.full_name
   
class StudentcourseEnrollment(models.Model):
    course=models.ForeignKey(Course,on_delete= models.CASCADE,related_name='enrolled_courses')
    student=models.ForeignKey(Student,on_delete= models.CASCADE,related_name='enrolled_students')
    enrolled_time=models.DateTimeField(auto_now_add=True)
