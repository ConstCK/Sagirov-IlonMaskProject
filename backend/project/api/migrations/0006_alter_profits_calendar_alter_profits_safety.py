# Generated by Django 4.2.4 on 2023-08-29 09:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_profits_calendar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profits',
            name='calendar',
            field=models.CharField(max_length=32, verbose_name='Календарь'),
        ),
        migrations.AlterField(
            model_name='profits',
            name='safety',
            field=models.CharField(max_length=32, verbose_name='Безопасность'),
        ),
    ]