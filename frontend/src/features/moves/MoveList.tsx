"use client";
import { useMoves } from "./useMoves";
import "@/styles/components.css";

export function MovesList() {
	const { data, isLoading, error } = useMoves();

	if (isLoading) return <div>Loading Moves...</div>;
	if (error) return <div>Failed to load moves.</div>;

	return (
		<div className="grid">
			{data?.map((move) => (
				<div key={move.id} className="card move-card">
					<div className="move-header">
						<span className="move-name">{move.name}</span>
						{/* <span className="move-type">{move.type}</span> */}
					</div>
					<div className="move-details">
						<span>Power: {move.power}</span>
						<span>Acc: {move.accuracy}</span>
					</div>
					<p className="move-desc">{move.description}</p>
				</div>
			))}
		</div>
	);
}
