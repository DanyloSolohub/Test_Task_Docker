# Generated by Django 3.2 on 2021-04-14 19:07

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GroupModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, validators=[django.core.validators.RegexValidator('^[a-zA-ZА-яіІїЇґҐёЁєЄ]{2,20}$', 'Only alpha ,min 2 max 20 characters ')])),
                ('description', models.TextField()),
            ],
            options={
                'db_table': 'groups',
            },
        ),
    ]