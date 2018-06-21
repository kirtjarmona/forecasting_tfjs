from django.shortcuts import render
from django.http import HttpResponse

from .models import forecast_data


# Create your views here.
def index(request):
	#return HttpResponse('Hi')
	f_data = forecast_data.objects.order_by('-year','-quarter')
	by_quarter = forecast_data.objects.filter(year=2017)
	q_quarter = forecast_data.objects.raw('SELECT year as id, AVG(temperature)  as temp FROM forecasting_forecast_data GROUP BY year ORDER BY year DESC;')
	v_quarter = forecast_data.objects.raw('SELECT id, year, dvo_data FROM forecasting_forecast_data ORDER BY year DESC;')
	order_by_year_quarter = forecast_data.objects.raw('SELECT `quarter`, `year`, `dvo_data`, id FROM `forecasting_forecast_data` ORDER BY `year` DESC,`quarter` DESC;')
	count_quarter_1= forecast_data.objects.filter(quarter=1)
	count_quarter_2= forecast_data.objects.filter(quarter=2)
	count_quarter_3= forecast_data.objects.filter(quarter=3)
	count_quarter_4= forecast_data.objects.filter(quarter=4)
	

	context = {
	'title':'Data Forecast',
	'data':f_data,
	'quarter':by_quarter,
	'quarter_q':q_quarter,
	'quarter_v':v_quarter,
	'order_by_year_quarter':order_by_year_quarter,
	'count_quarter_1':count_quarter_1,
	'count_quarter_2':count_quarter_2,
	'count_quarter_3':count_quarter_3,
	'count_quarter_4':count_quarter_4
	}
	
	return render (request, 'forecast/index.html', context)



def predict(request):
	# f_data = forecast_data.objects.get(id=id)
	f_data = 'xxx'

	context = {
		'title':'Prediction',
		'data': f_data
	}

	return render(request, 'forecast/predict.html', context)