from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Profits(models.Model):
    position = models.PositiveIntegerField(verbose_name='Место')
    safety = models.PositiveIntegerField(verbose_name='Безопасность',
                                         validators=[MinValueValidator(1), MaxValueValidator(100)])

    calendar = models.PositiveIntegerField(validators=[MinValueValidator(2001)], verbose_name='Календарь')
    trip = models.PositiveIntegerField(verbose_name='Путешествие')
    created_at = models.DateField(auto_now=True)

    class Meta:
        verbose_name = "преимущество"
        verbose_name_plural = "преимущества"
        ordering = ["-created_at"]
