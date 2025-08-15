from rest_framework.routers import DefaultRouter
from .views import GalaxyViewSet, StarViewSet, PlanetViewSet, BlackHoleViewSet

router = DefaultRouter()
router.register(r'galaxies', GalaxyViewSet)
router.register(r'stars', StarViewSet)
router.register(r'planets', PlanetViewSet)
router.register(r'blackholes', BlackHoleViewSet)

urlpatterns = router.urls
