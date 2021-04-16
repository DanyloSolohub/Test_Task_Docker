from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import UserModel
from .serializers import UserSerializer


# Create your views here.
class ListCreateView(ListCreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer


class ReadUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
