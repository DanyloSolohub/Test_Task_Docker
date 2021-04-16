from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator

from apps.groups.models import GroupModel
from enums.regex_enum import RegEx as r
"🧙"


# Create your models here.

class UserModel(models.Model):
    class Meta:
        db_table = 'users'

    name = models.CharField(max_length=20, validators=[
        RegexValidator(r.NAME.reg, r.NAME.msg)
    ])
    age = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(150)])
    email = models.EmailField(unique=True)
    create = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)
    group = models.ForeignKey(GroupModel, on_delete=models.PROTECT, related_name='users', blank=True, null=True)
