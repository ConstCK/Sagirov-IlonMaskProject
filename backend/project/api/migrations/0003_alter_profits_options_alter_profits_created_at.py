# Generated by Django 4.2.4 on 2023-08-29 08:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_flightschedule'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='profits',
            options={'ordering': ['created_at'], 'verbose_name': 'преимущество', 'verbose_name_plural': 'преимущества'},
        ),
        migrations.AlterField(
            model_name='profits',
            name='created_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
