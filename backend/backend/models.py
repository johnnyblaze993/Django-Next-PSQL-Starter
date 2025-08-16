import uuid
from django.db import models

class Galaxy(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    distance_mly = models.FloatField()
    description = models.TextField()

class Star(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    galaxy = models.ForeignKey(Galaxy, on_delete=models.CASCADE, related_name='stars')
    type = models.CharField(max_length=50)
    mass_solar = models.FloatField()
    radius_solar = models.FloatField()
    description = models.TextField()

class Planet(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    star = models.ForeignKey(Star, on_delete=models.CASCADE, related_name='planets')
    galaxy = models.ForeignKey(Galaxy, on_delete=models.CASCADE, related_name='planets')
    type = models.CharField(max_length=50)
    mass_earth = models.FloatField()
    radius_earth = models.FloatField()
    habitable = models.BooleanField(default=False)

class BlackHole(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    galaxy = models.ForeignKey(Galaxy, on_delete=models.CASCADE, related_name='blackholes')
    type = models.CharField(max_length=50)
    mass_solar = models.FloatField()
    distance_from_center_ly = models.FloatField()
    description = models.TextField()


class Plant(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    scientific_name = models.CharField(max_length=150)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField()
    in_stock = models.BooleanField(default=True)
