import { useQuery } from "@tanstack/react-query";

export interface Accessory {
	id: string;
	name: string;
	price: number;
	description: string;
}

export const fetchAccessories = async (): Promise<Accessory[]> => {
	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
		}/api/accessories/`
	);
	if (!res.ok) throw new Error("Failed to fetch accessories");
	return res.json();
};

export function useAccessories() {
	return useQuery<Accessory[]>({
		queryKey: ["accessories"],
		queryFn: fetchAccessories,
	});
}
