from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import GroupModel
from .serializers import GroupSerializer


class GroupListView(ListCreateAPIView):
    queryset = GroupModel.objects.all()
    serializer_class = GroupSerializer


class GroupReadUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = GroupModel.objects.all()
    serializer_class = GroupSerializer
