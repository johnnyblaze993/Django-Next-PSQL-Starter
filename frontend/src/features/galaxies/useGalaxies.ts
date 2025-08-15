// src/features/useGalaxies.ts
import { useQuery } from "@tanstack/react-query";

export interface Galaxy {
	id: string;
	name: string;
	type: string;
	distance_mly: number;
	description: string;
}

export const fetchGalaxies = async (): Promise<Galaxy[]> => {
	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
		}/api/galaxies/`
	);
	if (!res.ok) throw new Error("Failed to fetch galaxies");
	return res.json();
};

export function useGalaxies() {
	return useQuery<Galaxy[]>({
		queryKey: ["galaxies"],
		queryFn: fetchGalaxies,
	});
}
