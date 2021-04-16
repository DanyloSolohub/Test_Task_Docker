from rest_framework.urls import path

from .views import ListCreateView, ReadUpdateDeleteView

urlpatterns = [
    path('', ListCreateView.as_view(), name='get_or_create_view'),
    path('/<int:pk>', ReadUpdateDeleteView.as_view(), name='read_update_delete_view')
]
