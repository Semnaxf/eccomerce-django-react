from django.shortcuts import render
from django.http import JsonResponse
from .productos import productos
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Producto

from .serializer import SerilaizadorProducto

# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    return Response('Hola')


@api_view(['GET'])
def getProductos(request):
    productos = Producto.objects.all()
    serializer = SerilaizadorProducto(productos, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProducto(request, pk):
    producto = Producto.objects.get(id=pk)
    serializer = SerilaizadorProducto(producto, many=False)
    return Response(serializer.data)
