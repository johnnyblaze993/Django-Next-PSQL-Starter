from rest_framework import serializers
from .models import Category, Plant, Accessory, CareTip


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class AccessorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Accessory
        fields = '__all__'


class PlantSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True
    )
    accessories = AccessorySerializer(read_only=True, many=True)
    accessory_ids = serializers.PrimaryKeyRelatedField(
        queryset=Accessory.objects.all(), source='accessories', many=True, write_only=True, required=False
    )

    class Meta:
        model = Plant
        fields = ['id', 'name', 'scientific_name', 'price', 'description', 'in_stock', 'light', 'water', 'category', 'category_id', 'accessories', 'accessory_ids']


class CareTipSerializer(serializers.ModelSerializer):
    class Meta:
        model = CareTip
        fields = '__all__'
