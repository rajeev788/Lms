# Generated by Django 5.0.6 on 2024-06-28 07:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_rename_titile_coursecategory_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='featured_img',
            field=models.ImageField(blank=True, null=True, upload_to='course_imgs/'),
        ),
        migrations.AddField(
            model_name='course',
            name='techs',
            field=models.TextField(blank=True, null=True),
        ),
    ]
