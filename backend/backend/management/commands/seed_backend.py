from django.core.management.base import BaseCommand
from backend.models import Plant


class Command(BaseCommand):
    help = "Seeds the database with initial plant data"

    def handle(self, *args, **kwargs):
        Plant.objects.all().delete()

        Plant.objects.create(
            name="Aloe Vera",
            scientific_name="Aloe barbadensis miller",
            price=9.99,
            description="Soothing succulent.",
        )
        Plant.objects.create(
            name="Snake Plant",
            scientific_name="Dracaena trifasciata",
            price=14.99,
            description="Hardy and air-purifying.",
        )
        Plant.objects.create(
            name="Peace Lily",
            scientific_name="Spathiphyllum wallisii",
            price=12.50,
            description="Elegant flowering plant.",
        )

        self.stdout.write(self.style.SUCCESS("Seeded plant data!"))

