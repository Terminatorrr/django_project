from django.shortcuts import render
from products.models import *

def product(request, product_id):
    product = Product.objects.get(id=product_id)
    product_image = ProductImage
    return render(request, 'product/product.html', locals())
