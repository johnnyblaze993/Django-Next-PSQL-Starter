import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Move } from "./moves.type";

export function useMoves() {
	return useQuery<Move[]>({
		queryKey: ["moves"],
		queryFn: async () => {
			const res = await axios.get("http://localhost:8000/api/moves/");
			return res.data;
		},
	});
}
