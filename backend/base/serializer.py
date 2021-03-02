from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Producto


class SerilaizadorProducto(serializers.ModelSerializer):
    class Meta:
        model = Producto 
        fields = '__all__'