from django.contrib import admin
from .models import Accessories, Employee

# Register your models here.


class AccessoriesAdmin(admin.ModelAdmin):
    list_display = ('accessories_name', 'identification_no', 'purchase_date')


admin.site.register(Accessories, AccessoriesAdmin)
admin.site.register(Employee)
