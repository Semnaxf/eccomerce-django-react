# Generated by Django 3.0.5 on 2021-02-17 06:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(blank=True, max_length=200, null=True)),
                ('marca', models.CharField(blank=True, max_length=200, null=True)),
                ('categoria', models.CharField(blank=True, max_length=200, null=True)),
                ('descripcion', models.TextField(blank=True, null=True)),
                ('rating', models.DecimalField(blank=True, decimal_places=2, max_digits=7)),
                ('numero_reviews', models.IntegerField(blank=True, default=0, null=True)),
                ('precio', models.DecimalField(blank=True, decimal_places=2, max_digits=7)),
                ('stock', models.IntegerField(blank=True, default=0, null=True)),
                ('creado', models.DateField(auto_now_add=True)),
                ('usuario_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
