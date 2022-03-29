
from .views import AccessoriesViewSet, PurchaseListViewSet, EmployeeViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register('accessories', AccessoriesViewSet)
router.register('purchaselist', PurchaseListViewSet, basename='accessories')
router.register('employees', EmployeeViewSet)
# router.register('users', UserViewSet)


urlpatterns = [
    path('api/', include(router.urls)),

]
