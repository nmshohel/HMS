from .models import Accessories
from rest_framework import serializers


class AccessoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accessories
        fields = ['id', 'accessories_name', 'identification_no', 'model_no',
                  'description', 'purchase_date', 'price', 'accessories_supplier_name_address',
                  'warrenty', 'user_name', 'user_designation',
                  'department', 'office_name', 'mobile_no']

    # accessories_name = models.CharField(max_length=100, blank=True, null=True)
    # identification_no = models.CharField(max_length=100, blank=True, null=True)
    # model_no = models.CharField(max_length=100, blank=True, null=True)
    # description = models.CharField(max_length=100, blank=True, null=True)
    # purchase_date = models.CharField(max_length=100, blank=True, null=True)
    # price = models.CharField(max_length=100, blank=True, null=True)
    # accessories_supplier_name_address = models.CharField(
    #     max_length=100, blank=True, null=True)
    # warrenty = models.CharField(max_length=100, blank=True, null=True)
    # user_name = models.CharField(max_length=100, blank=True, null=True)
    # user_designation = models.CharField(max_length=100, blank=True, null=True)
    # department = models.CharField(max_length=100, blank=True, null=True)
    # office_name = models.CharField(max_length=100, blank=True, null=True)
    # mobile_no = models.CharField(max_length=100, blank=True, null=True)
