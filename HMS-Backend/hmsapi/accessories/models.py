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
    is_assign = models.BooleanField(default=False)
    is_condem = models.BooleanField(default=False)

    def __str__(self):
        return str(self.accessories_name)


# 01. Item Name:(Desktop Computer, Monitor, CPU, UPS, Server, DVR, NBR, CC Camera)
# 02. Identification No(unique)
# 03. Model No
# 04. Description
# 05. Purchase Data:
# 06. Price:
# 07. Supplier Name:
# 08. Supplier Address
# 09. Warranty:

# Item Asign:
# User name:
# Designation:
# Department:
# Office Name:
# Mobile No:
