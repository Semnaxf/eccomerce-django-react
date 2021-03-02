from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('productos/', views.getProductos, name="productos"),
    path('productos/<str:pk>/', views.getProducto, name="producto"),
]
