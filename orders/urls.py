from django.conf.urls import include
from django.contrib import admin
from django.urls import path, re_path
from orders import views

urlpatterns = [
    re_path(r'^basket_adding/', views.basket_adding, name='basket_adding'),
]
