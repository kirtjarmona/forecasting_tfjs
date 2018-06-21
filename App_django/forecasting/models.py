from django.db import models
import datetime




class forecast_data(models.Model):
	YEAR_CHOICES = [(r,r) for r in range(1984, datetime.date.today().year+1)]

	QUARTER = (
        (1, 'Quarter 1'),
        (2, 'Quarter 2'),
        (3, 'Quarter 3'),
        (4, 'Quarter 4'),
    )
    
	year = models.IntegerField(choices=YEAR_CHOICES, default=datetime.datetime.now().year)
	quarter = models.IntegerField(choices=QUARTER, default=1)
	temperature = models.FloatField(default=0, verbose_name="Temperature AVG (°C)")
	rainfall = models.FloatField(default=0, verbose_name="Rainfall AVG (mm)")
	humidity = models.FloatField(default=0, verbose_name="Visibility AVG (km)")
	sunshine = models.FloatField(default=0, verbose_name="Humidity AVG (%)")
	dvo_data = models.IntegerField(default=0, verbose_name="Palay Volume (Metric Tons)")

	class Meta:
		verbose_name_plural = "Forecast Data"

 # Prediction
class prediction(models.Model):
	YEAR_CHOICES = [(r,r) for r in range(1984, datetime.date.today().year+1)]

	QUARTER = (
        (1, 'Quarter 1'),
        (2, 'Quarter 2'),
        (3, 'Quarter 3'),
        (4, 'Quarter 4'),
    )
    
	year = models.IntegerField(choices=YEAR_CHOICES, default=datetime.datetime.now().year)
	quarter = models.IntegerField(choices=QUARTER, default=1)
	prediction = models.FloatField(default=0, verbose_name="Palay Volume (Metric Tons)")
	

	class Meta:
		verbose_name_plural = "Prediction"