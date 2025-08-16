from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, PlantViewSet, AccessoryViewSet, CareTipViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'plants', PlantViewSet)
router.register(r'accessories', AccessoryViewSet)
router.register(r'care-tips', CareTipViewSet)

urlpatterns = router.urls
