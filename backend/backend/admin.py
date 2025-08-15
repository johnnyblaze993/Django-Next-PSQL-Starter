from django.contrib import admin
from .models import Galaxy, Star, Planet, BlackHole

admin.site.register(Galaxy)
admin.site.register(Star)
admin.site.register(Planet)
admin.site.register(BlackHole)
