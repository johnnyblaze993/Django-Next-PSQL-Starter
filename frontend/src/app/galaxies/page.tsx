// src/app/galaxies/page.tsx

"use client";

import { BackButton } from "@/components/BackButton";
import { Loading } from "@/components/Loading";
import { useGalaxies } from "@/features/galaxies/useGalaxies";
import "@/styles/components.css";

export default function GalaxiesPage() {
	const { data, isLoading, isError } = useGalaxies();
	if (isLoading) return <Loading />;
	{
		isError && <div>Error loading galaxies.</div>;
	}
	return (
		<section>
			<h1 className="heading">Galaxies</h1>
			<p className="mb-2 description">
				Explore the galaxies in our Astronomy Data Explorer.
			</p>
			<BackButton href="/">Back to Home</BackButton>

			<div className="grid">
				{data &&
					data.map((galaxy) => (
						<div className="card" key={galaxy.id}>
							<div className="card-header">{galaxy.name}</div>
							<div>
								<strong>Type:</strong> {galaxy.type}
							</div>
							<div>
								<strong>Distance:</strong> {galaxy.distance_mly} million light
								years
							</div>
							<div className="description">{galaxy.description}</div>
						</div>
					))}
			</div>
		</section>
	);
}
