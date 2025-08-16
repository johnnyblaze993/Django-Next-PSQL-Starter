import uuid
from django.db import models


class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Accessory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Plant(models.Model):
    SUN_CHOICES = [
        ("full", "Full Sun"),
        ("partial", "Partial Shade"),
        ("low", "Low Light"),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="plants")
    name = models.CharField(max_length=100)
    scientific_name = models.CharField(max_length=150)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField()
    in_stock = models.BooleanField(default=True)
    light = models.CharField(max_length=20, choices=SUN_CHOICES)
    water = models.CharField(max_length=100)
    accessories = models.ManyToManyField(Accessory, related_name="plants", blank=True)

    def __str__(self):
        return self.name


class CareTip(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.title
