import { useQuery } from "@tanstack/react-query";

export interface Planet {
	id: string;
	name: string;
	type: string;
	star: string;
	galaxy: string;
	mass_earth: number;
	radius_earth: number;
	habitable: boolean;
}

export const fetchPlanets = async (): Promise<Planet[]> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/planets/`
	);
	if (!res.ok) throw new Error("Failed to fetch planets");
	return res.json();
};

export function usePlanets() {
	return useQuery<Planet[]>({
		queryKey: ["planets"],
		queryFn: fetchPlanets,
	});
}
