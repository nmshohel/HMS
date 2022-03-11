from .models import Accessories
from rest_framework import serializers


class AccessoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accessories
        fields = ['id', 'item_name', 'identification_no', 'model_no', 'description', 'parchase_date', 'price', 'supplier_name',
                  'supplier_address', 'warrenty', 'user_name', 'user_designation',
                  'department', 'office_name', 'mobile_no']
