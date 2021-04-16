from django.db import models
from enums.regex_enum import RegEx as r
from django.core.validators import RegexValidator


# Create your models here.
class GroupModel(models.Model):
    class Meta:
        db_table = 'groups'

    name = models.CharField(max_length=30, validators=[
        RegexValidator(r.NAME.reg, r.NAME.msg)
    ])
    description = models.TextField()
