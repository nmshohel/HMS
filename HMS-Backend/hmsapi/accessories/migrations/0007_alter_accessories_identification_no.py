# Generated by Django 4.0.3 on 2022-03-15 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accessories', '0006_accessories_is_condem_alter_accessories_is_assign'),
    ]

    operations = [
        migrations.AlterField(
            model_name='accessories',
            name='identification_no',
            field=models.CharField(blank=True, max_length=100, null=True, unique=True),
        ),
    ]