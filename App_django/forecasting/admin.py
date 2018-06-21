from django.contrib import admin

# Register your models here.
from .models import forecast_data
from .models import prediction
admin.site.register(forecast_data)
admin.site.register(prediction)