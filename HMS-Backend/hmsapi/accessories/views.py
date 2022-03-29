from django.shortcuts import render

from rest_framework import viewsets
from .serializers import AccessoriesSerializer, PurchaseListSerializer, EmployeeSerializer
from .models import Accessories, Employee

# Create your views here.


class AccessoriesViewSet(viewsets.ModelViewSet):
    queryset = Accessories.objects.all()
    serializer_class = AccessoriesSerializer


class PurchaseListViewSet(viewsets.ModelViewSet):
    queryset = Accessories.objects.filter(is_assign=False)
    serializer_class = PurchaseListSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.filter(is_active=True)
    serializer_class = EmployeeSerializer
