from django.shortcuts import render

from rest_framework import viewsets
from .serializers import AccessoriesSerializer
from .models import Accessories

# Create your views here.


class AccessoriesViewSet(viewsets.ModelViewSet):
    queryset = Accessories.objects.all()
    serializer_class = AccessoriesSerializer
