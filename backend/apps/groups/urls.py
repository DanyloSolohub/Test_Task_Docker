from rest_framework.urls import path

from .views import GroupListView, GroupReadUpdateDeleteView

urlpatterns = [
    path('', GroupListView.as_view(), name='get_or_create_group'),
    path('/<int:pk>', GroupReadUpdateDeleteView.as_view(), name='read_update_delete_view')
]
