from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Producto(models.Model):
    """ Tabla de productos. 
    """
    usuario_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    nombre = models.CharField(max_length=200, null=True, blank=True)
    imagen = models.ImageField(null=True, blank=True)
    marca = models.CharField(max_length=200, null=True, blank=True)
    categoria = models.CharField(max_length=200, null=True, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2, blank=True)
    numero_reviews = models.IntegerField(null=True, blank=True, default=0)
    precio = models.DecimalField(max_digits=7, decimal_places=2, blank=True)
    stock = models.IntegerField(null=True, blank=True, default=0)
    creado = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.nombre


class Review(models.Model):
    """ Tabla de reseñas.
    """
    producto_id = models.ForeignKey(
        Producto, on_delete=models.SET_NULL, null=True)
    usuario_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    nombre = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comentario = models.TextField(null=True, blank=True)

    def __str__(self):
        return str(self.rating)


class Orden(models.Model):
    """ Tabla de ordenes. 
    """
    ESTATUS_ENVIO = (
        (1, 'Pendiente'),
        (2, 'Enviado'),
        (3, 'Entregado'),
    )

    usuario_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    metodopago = models.CharField(max_length=200, null=True, blank=True)
    iva = models.DecimalField(max_digits=7, decimal_places=2, blank=True)
    precioenvio = models.DecimalField(
        max_digits=7, decimal_places=2, blank=True)
    total = models.DecimalField(max_digits=7, decimal_places=2, blank=True)
    estatus_pago = models.BooleanField(default=False)
    fecha_pago = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)
    estatus_envio = models.IntegerField(choices=ESTATUS_ENVIO)
    fecha_envio = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)
    fecha_creacion = models.DateTimeField(
        auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return str(self.fecha_creacion)

    class Meta:
        verbose_name_plural = "Ordenes"


class OrdenProducto(models.Model):

    producto_id = models.ForeignKey(
        Producto, on_delete=models.SET_NULL, null=True)
    orden_id = models.ForeignKey(Orden, on_delete=models.SET_NULL, null=True)
    nombre = models.CharField(max_length=200, null=True, blank=True)
    cantidad = models.IntegerField(null=True, blank=True, default=0)
    precio = models.DecimalField(max_digits=7, decimal_places=2, blank=True)
    imagen = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.nombre


class direccionEnvio(models.Model):
    orden_id = models.OneToOneField(
        Orden, on_delete=models.CASCADE, null=True, blank=True)
    direccion = models.CharField(max_length=200, null=True, blank=True)
    ciudad = models.CharField(max_length=200, null=True, blank=True)
    codigopostal = models.CharField(max_length=200, null=True, blank=True)
    pais = models.CharField(max_length=200, null=True, blank=True)
    precio = models.DecimalField(max_digits=7, decimal_places=2, blank=True)

    def __str__(self):
        return self.direccion

    class Meta:
        verbose_name_plural = "Direcciones envío"