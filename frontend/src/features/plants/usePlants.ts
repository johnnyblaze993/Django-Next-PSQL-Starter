import { useQuery } from "@tanstack/react-query";

export interface Accessory {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Plant {
  id: string;
  name: string;
  scientific_name: string;
  price: number;
  description: string;
  in_stock: boolean;
  light: string;
  water: string;
  category: Category;
  accessories: Accessory[];
}

export const fetchPlants = async (): Promise<Plant[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/plants/`
  );
  if (!res.ok) throw new Error("Failed to fetch plants");
  return res.json();
};

export function usePlants() {
  return useQuery<Plant[]>({ queryKey: ["plants"], queryFn: fetchPlants });
}
