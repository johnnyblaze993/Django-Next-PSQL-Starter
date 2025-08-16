import { useQuery } from "@tanstack/react-query";

export interface Category {
	id: string;
	name: string;
	description: string;
}

export const fetchCategories = async (): Promise<Category[]> => {
	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
		}/api/categories/`
	);
	if (!res.ok) throw new Error("Failed to fetch categories");
	return res.json();
};

export function useCategories() {
	return useQuery<Category[]>({
		queryKey: ["categories"],
		queryFn: fetchCategories,
	});
}
