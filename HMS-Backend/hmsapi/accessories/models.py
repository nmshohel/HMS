from django.db import models

# Create your models here.


class Accessories(models.Model):
    item_name = models.CharField(max_length=100)
    identification_no = models.CharField(max_length=100)
    model_no = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    parchase_date = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    supplier_name = models.CharField(max_length=100)
    supplier_address = models.CharField(max_length=100)
    warrenty = models.CharField(max_length=100)
    user_name = models.CharField(max_length=100)
    user_designation = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    office_name = models.CharField(max_length=100)
    mobile_no = models.CharField(max_length=100)

    def __str__(self):
        return self.item_name


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
