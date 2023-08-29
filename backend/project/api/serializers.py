from rest_framework import serializers

from .models import Profits, FlightSchedule


class ProfitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profits
        fields = '__all__'


class FlightScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlightSchedule
        fields = '__all__'
