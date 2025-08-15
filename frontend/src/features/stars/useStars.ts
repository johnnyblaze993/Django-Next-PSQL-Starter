import { useQuery } from "@tanstack/react-query";

export interface Star {
	id: string;
	name: string;
	type: string;
	galaxy: string;
	mass_solar: number;
	radius_solar: number;
	description: string;
}

export const fetchStars = async (): Promise<Star[]> => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/stars/`
	);
	if (!res.ok) throw new Error("Failed to fetch stars");
	return res.json();
};

export function useStars() {
	return useQuery<Star[]>({
		queryKey: ["stars"],
		queryFn: fetchStars,
	});
}
