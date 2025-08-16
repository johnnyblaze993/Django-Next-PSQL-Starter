from django.core.management.base import BaseCommand
from backend.models import Category, Plant, Accessory, CareTip


class Command(BaseCommand):
    help = "Seeds the database with initial plant store data"

    def handle(self, *args, **kwargs):
        # Clear existing data
        CareTip.objects.all().delete()
        Plant.objects.all().delete()
        Category.objects.all().delete()
        Accessory.objects.all().delete()

        # Categories
        succ = Category.objects.create(name="Succulents", description="Low-maintenance water-storing plants.")
        air = Category.objects.create(name="Air Purifiers", description="Plants that improve indoor air quality.")
        flower = Category.objects.create(name="Flowering", description="Plants that bloom.")
        herb = Category.objects.create(name="Herbs", description="Edible herb plants.")
        tree = Category.objects.create(name="Trees", description="Indoor-friendly trees.")

        # Accessories
        pot = Accessory.objects.create(name="Ceramic Pot", price=15.00, description="Stylish 6-inch pot.")
        soil = Accessory.objects.create(name="Organic Soil", price=8.50, description="Nutrient-rich potting soil.")
        can = Accessory.objects.create(name="Watering Can", price=12.00, description="Metal watering can.")
        light = Accessory.objects.create(name="Grow Light", price=45.00, description="Full-spectrum LED light.")
        fert = Accessory.objects.create(name="Fertilizer", price=10.00, description="All-purpose plant food.")

        # Plants
        aloe = Plant.objects.create(
            category=succ,
            name="Aloe Vera",
            scientific_name="Aloe barbadensis miller",
            price=9.99,
            description="Soothing succulent with medicinal gel.",
            light="full",
            water="Every 3 weeks",
        )
        aloe.accessories.set([pot, soil])

        snake = Plant.objects.create(
            category=air,
            name="Snake Plant",
            scientific_name="Dracaena trifasciata",
            price=14.99,
            description="Hardy plant that filters air.",
            light="low",
            water="Every 2-3 weeks",
        )
        snake.accessories.set([pot, soil])

        peace = Plant.objects.create(
            category=air,
            name="Peace Lily",
            scientific_name="Spathiphyllum wallisii",
            price=12.50,
            description="Elegant white blooms that clean the air.",
            light="partial",
            water="Weekly",
        )
        peace.accessories.set([pot, fert])

        spider = Plant.objects.create(
            category=air,
            name="Spider Plant",
            scientific_name="Chlorophytum comosum",
            price=11.00,
            description="Easy-care plant with arching leaves.",
            light="partial",
            water="Weekly",
        )
        spider.accessories.set([pot, soil])

        lavender = Plant.objects.create(
            category=herb,
            name="Lavender",
            scientific_name="Lavandula",
            price=8.00,
            description="Fragrant herb for relaxing scent.",
            light="full",
            water="Weekly",
        )
        lavender.accessories.set([pot, soil])

        basil = Plant.objects.create(
            category=herb,
            name="Basil",
            scientific_name="Ocimum basilicum",
            price=5.00,
            description="Fresh herb for cooking.",
            light="full",
            water="When soil is dry",
        )
        basil.accessories.set([pot, soil, fert])

        money = Plant.objects.create(
            category=tree,
            name="Money Tree",
            scientific_name="Pachira aquatica",
            price=25.00,
            description="Symbol of good luck.",
            light="partial",
            water="Weekly",
        )
        money.accessories.set([pot, soil, fert])

        fiddle = Plant.objects.create(
            category=tree,
            name="Fiddle Leaf Fig",
            scientific_name="Ficus lyrata",
            price=40.00,
            description="Large leaves for bold decor.",
            light="partial",
            water="Weekly",
        )
        fiddle.accessories.set([pot, soil, fert, light])

        orchid = Plant.objects.create(
            category=flower,
            name="Orchid",
            scientific_name="Orchidaceae",
            price=18.00,
            description="Delicate blooms in many colors.",
            light="partial",
            water="Weekly with soak",
        )
        orchid.accessories.set([pot, fert, light])

        echeveria = Plant.objects.create(
            category=succ,
            name="Echeveria",
            scientific_name="Echeveria elegans",
            price=6.00,
            description="Rosette-forming succulent.",
            light="full",
            water="Every 3 weeks",
        )
        echeveria.accessories.set([pot, soil])

        # Care tips
        CareTip.objects.create(title="Check Soil Moisture", content="Stick your finger an inch into the soil; water only if dry.")
        CareTip.objects.create(title="Rotate Plants", content="Rotate plants weekly for even growth.")
        CareTip.objects.create(title="Clean Leaves", content="Wipe dust from leaves to allow better photosynthesis.")
        CareTip.objects.create(title="Prune Regularly", content="Remove dead leaves to encourage new growth.")
        CareTip.objects.create(title="Use Proper Drainage", content="Ensure pots have drainage holes to prevent root rot.")

        self.stdout.write(self.style.SUCCESS("Seeded plant store data!"))
