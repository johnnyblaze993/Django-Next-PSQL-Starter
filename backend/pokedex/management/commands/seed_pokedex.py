from django.core.management.base import BaseCommand
from pokedex.models import Galaxy, Star, Planet, BlackHole

class Command(BaseCommand):
    help = "Seeds the database with initial astronomy data"

    def handle(self, *args, **kwargs):
        # Wipe all data first (CAREFUL: destructive!)
        Galaxy.objects.all().delete()
        Star.objects.all().delete()
        Planet.objects.all().delete()
        BlackHole.objects.all().delete()

        # 1. Create galaxies
        milky_way = Galaxy.objects.create(
            name="Milky Way",
            type="Spiral",
            distance_mly=0.0,
            description="The galaxy that contains our Solar System."
        )
        andromeda = Galaxy.objects.create(
            name="Andromeda",
            type="Spiral",
            distance_mly=2.5,
            description="Nearest major galaxy to the Milky Way."
        )

        # 2. Create stars
        sun = Star.objects.create(
            name="Sun",
            galaxy=milky_way,
            type="G-Type Main-Sequence",
            mass_solar=1.0,
            radius_solar=1.0,
            description="Our home star."
        )
        proxima_centauri = Star.objects.create(
            name="Proxima Centauri",
            galaxy=milky_way,
            type="Red Dwarf",
            mass_solar=0.12,
            radius_solar=0.14,
            description="Closest known star to the Sun."
        )
        andromeda_star = Star.objects.create(
            name="Andromeda Star 1",
            galaxy=andromeda,
            type="Blue Giant",
            mass_solar=20.0,
            radius_solar=5.0,
            description="A massive blue giant in the Andromeda Galaxy."
        )

        # 3. Create planets
        earth = Planet.objects.create(
            name="Earth",
            star=sun,
            galaxy=milky_way,
            type="Terrestrial",
            mass_earth=1.0,
            radius_earth=1.0,
            habitable=True
        )
        mars = Planet.objects.create(
            name="Mars",
            star=sun,
            galaxy=milky_way,
            type="Terrestrial",
            mass_earth=0.107,
            radius_earth=0.532,
            habitable=False
        )
        proxima_b = Planet.objects.create(
            name="Proxima b",
            star=proxima_centauri,
            galaxy=milky_way,
            type="Terrestrial",
            mass_earth=1.27,
            radius_earth=1.1,
            habitable=True
        )

        # 4. Create black holes
        sag_a = BlackHole.objects.create(
            name="Sagittarius A*",
            galaxy=milky_way,
            type="Supermassive",
            mass_solar=4_100_000,
            distance_from_center_ly=0.0,
            description="The supermassive black hole at the center of the Milky Way."
        )
        andromeda_bh = BlackHole.objects.create(
            name="Andromeda Black Hole",
            galaxy=andromeda,
            type="Supermassive",
            mass_solar=1_000_000_000,
            distance_from_center_ly=0.0,
            description="A massive black hole at the center of the Andromeda galaxy."
        )

        self.stdout.write(self.style.SUCCESS("Seeded astronomy data!"))
