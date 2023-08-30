from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Profits(models.Model):
    position = models.PositiveIntegerField(verbose_name='Место')
    safety = models.CharField(max_length=32, verbose_name='Безопасность')
    calendar = models.PositiveSmallIntegerField (validators=[MinValueValidator(2000), MaxValueValidator(2100)],
                                                 verbose_name='Календарь')
    trip = models.PositiveIntegerField(verbose_name='Путешествие')
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Преимущество № {self.pk}'

    class Meta:
        verbose_name = "преимущество"
        verbose_name_plural = "преимущества"
        ordering = ["-created_at"]


class FlightSchedule(models.Model):
    name = models.CharField(max_length=256, verbose_name="Название миссии")
    planned_date = models.DateField(verbose_name="Дата запуска")
    price = models.PositiveIntegerField(verbose_name="Цена билета")
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "График полетов"
        verbose_name_plural = "Графики полетов"
        ordering = ["planned_date"]
