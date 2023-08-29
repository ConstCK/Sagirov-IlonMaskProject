from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Profits, FlightSchedule
from .serializers import ProfitsSerializer, FlightScheduleSerializer


class ProfitsViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = ProfitsSerializer
    queryset = Profits.objects.all()


class FlightScheduleViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = FlightScheduleSerializer
    queryset = FlightSchedule.objects.all()
