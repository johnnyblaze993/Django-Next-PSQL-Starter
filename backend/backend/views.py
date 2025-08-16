from rest_framework import viewsets
from .models import Category, Plant, Accessory, CareTip
from .serializers import (
    CategorySerializer,
    PlantSerializer,
    AccessorySerializer,
    CareTipSerializer,
)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class PlantViewSet(viewsets.ModelViewSet):
    queryset = Plant.objects.select_related('category').prefetch_related('accessories')
    serializer_class = PlantSerializer


class AccessoryViewSet(viewsets.ModelViewSet):
    queryset = Accessory.objects.all()
    serializer_class = AccessorySerializer


class CareTipViewSet(viewsets.ModelViewSet):
    queryset = CareTip.objects.all()
    serializer_class = CareTipSerializer
