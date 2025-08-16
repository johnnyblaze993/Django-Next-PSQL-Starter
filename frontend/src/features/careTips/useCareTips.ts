import { useQuery } from "@tanstack/react-query";

export interface CareTip {
  id: string;
  title: string;
  content: string;
}

export const fetchCareTips = async (): Promise<CareTip[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/care-tips/`
  );
  if (!res.ok) throw new Error("Failed to fetch care tips");
  return res.json();
};

export function useCareTips() {
  return useQuery<CareTip[]>({ queryKey: ["care-tips"], queryFn: fetchCareTips });
}
