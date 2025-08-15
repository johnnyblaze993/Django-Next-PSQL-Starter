from rest_framework import viewsets
from .models import Galaxy, Star, Planet, BlackHole
from .serializers import GalaxySerializer, StarSerializer, PlanetSerializer, BlackHoleSerializer

class GalaxyViewSet(viewsets.ModelViewSet):
    queryset = Galaxy.objects.all()
    serializer_class = GalaxySerializer

class StarViewSet(viewsets.ModelViewSet):
    queryset = Star.objects.all()
    serializer_class = StarSerializer

class PlanetViewSet(viewsets.ModelViewSet):
    queryset = Planet.objects.all()
    serializer_class = PlanetSerializer

class BlackHoleViewSet(viewsets.ModelViewSet):
    queryset = BlackHole.objects.all()
    serializer_class = BlackHoleSerializer
