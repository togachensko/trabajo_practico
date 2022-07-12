from django.contrib.auth import get_user_model
from django.db import models


# Create your models here.

class Product(models.Model):
    name = models.TextField(max_length=300)
    category = models.TextField()
    description = models.TextField(max_length=1000)
    price = models.DecimalField(max_digits=100, decimal_places=2)
    features = models.TextField()
    offerPercentage = models.DecimalField(max_digits=20, decimal_places=2)
    created_at = models.DateTimeField(editable=False, auto_now_add=True, null=True)
    updated_at = models.DateTimeField(editable=False, auto_now=True, null=True)
    usuario = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='product')


class CartItem(models.Model):
    objects = None
    created_at = models.DateTimeField(editable=False, auto_now_add=True, null=True)
    updated_at = models.DateTimeField(editable=False, auto_now=True, null=True)
    Product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='shoppingCart')
    usuario = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='shoppingCart')


class Comment(models.Model):
    comment = models.TextField(max_length=300)
    created_at = models.DateTimeField(editable=False, auto_now_add=True, null=True)
    updated_at = models.DateTimeField(editable=False, auto_now=True, null=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='comment')
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='comment')
