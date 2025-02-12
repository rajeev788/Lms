# Generated by Django 5.0.6 on 2024-07-09 06:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_alter_student_options_rename_emai_student_email_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='StudentcourseEnrollment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('enroled_time', models.DateTimeField(auto_now_add=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='enrolled_courses', to='main.course')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='enrolled_students', to='main.student')),
            ],
        ),
    ]
