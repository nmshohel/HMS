# Generated by Django 4.0.3 on 2022-03-28 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accessories', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='accessories',
            name='is_assign',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
