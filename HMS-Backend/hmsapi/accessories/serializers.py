from .models import Accessories, Employee
from rest_framework import serializers


class AccessoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accessories
        fields = ['id', 'accessories_name', 'identification_no', 'model_no',
                  'description', 'purchase_date', 'price', 'accessories_supplier_name_address',
                  'warrenty', 'user_name', 'user_designation',
                  'department', 'office_name', 'mobile_no', 'is_assign']


class PurchaseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accessories
        fields = ['id', 'accessories_name', 'identification_no', 'model_no',
                  'description', 'purchase_date', 'price', 'accessories_supplier_name_address',
                  'warrenty']


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'
