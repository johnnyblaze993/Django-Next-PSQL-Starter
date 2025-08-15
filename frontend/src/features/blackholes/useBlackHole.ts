import { useQuery } from "@tanstack/react-query";

export interface BlackHole {
	id: string;
	name: string;
	type: string;
	galaxy: string;
	mass_solar: number;
	distance_from_center_ly: number;
	description: string;
}

export const fetchBlackHoles = async (): Promise<BlackHole[]> => {
	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
		}/api/blackholes/`
	);
	if (!res.ok) throw new Error("Failed to fetch black holes");
	return res.json();
};

export function useBlackHoles() {
	return useQuery<BlackHole[]>({
		queryKey: ["blackholes"],
		queryFn: fetchBlackHoles,
	});
}
