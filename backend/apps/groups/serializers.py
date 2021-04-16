from rest_framework.serializers import ModelSerializer

from apps.groups.models import GroupModel
from apps.users.serializers import UserSerializer


class GroupSerializer(ModelSerializer):
    users = UserSerializer(many=True, required=False)

    class Meta:
        model = GroupModel
        fields = ['id', 'name', 'description', 'users']
