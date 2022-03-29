from django.db import models

# Create your models here.


class Accessories(models.Model):
    accessories_name = models.CharField(max_length=100, blank=True, null=True)
    identification_no = models.CharField(
        max_length=100, unique=True, blank=True, null=True)
    model_no = models.CharField(max_length=100, blank=True, null=True)
    description = models.CharField(max_length=100, blank=True, null=True)
    purchase_date = models.CharField(max_length=100, blank=True, null=True)
    price = models.CharField(max_length=100, blank=True, null=True)
    accessories_supplier_name_address = models.CharField(
        max_length=100, blank=True, null=True)
    warrenty = models.CharField(max_length=100, blank=True, null=True)
    user_name = models.CharField(max_length=100, blank=True, null=True)
    user_designation = models.CharField(max_length=100, blank=True, null=True)
    department = models.CharField(max_length=100, blank=True, null=True)
    office_name = models.CharField(max_length=100, blank=True, null=True)
    mobile_no = models.CharField(max_length=100, blank=True, null=True)
    is_assign = models.BooleanField(default=False, blank=True, null=True)
    is_condem = models.BooleanField(default=False, blank=True, null=True)

    def __str__(self):
        return str(self.accessories_name)


class Employee(models.Model):

    employee_name = models.CharField(max_length=100, blank=True, null=True)
    designation = models.CharField(max_length=100, blank=True, null=True)
    department = models.CharField(max_length=100, blank=True, null=True)
    office_name = models.CharField(max_length=100, blank=True, null=True)
    mobile_no = models.CharField(max_length=100, blank=True, null=True)
    is_active = models.BooleanField(default=True, blank=True, null=True)

    def __str__(self):
        return str(self.employee_name)
