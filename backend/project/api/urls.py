from django.urls import path, include
from rest_framework import routers
from .views import ProfitsViewSet, FlightScheduleViewSet

router = routers.DefaultRouter()
router.register('profits', ProfitsViewSet)
router.register('schedule', FlightScheduleViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
]