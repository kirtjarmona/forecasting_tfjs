# Generated by Django 2.0.2 on 2018-05-27 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forecasting', '0002_auto_20180527_2327'),
    ]

    operations = [
        migrations.AlterField(
            model_name='forecast_data',
            name='quarter',
            field=models.IntegerField(choices=[(1, 'Quarter 1'), (2, 'Quarter 2'), (3, 'Quarter 3'), (4, 'Quarter 4')], default=1),
        ),
    ]
