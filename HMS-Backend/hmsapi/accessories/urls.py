
from .views import AccessoriesViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register('accessories', AccessoriesViewSet, basename='accessories')
# router.register('users', UserViewSet)


urlpatterns = [
    path('api/', include(router.urls)),

]
