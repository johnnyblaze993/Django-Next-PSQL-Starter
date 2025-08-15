"use client";
import { BackButton } from "@/components/BackButton";
import { Loading } from "@/components/Loading";
import { usePlanets } from "@/features/planets/usePlanets";
import "@/styles/components.css";

export default function PlanetsPage() {
	const { data, isLoading, isError } = usePlanets();

	if (isLoading) return <Loading />;
	{
		isError && <div>Error loading planets.</div>;
	}
	return (
		<section>
			<h1 className="heading">Planets</h1>
			<p className="mb-2 description">
				Discover the planets across various stars and galaxies.
			</p>
			<BackButton href="/">Back to Home</BackButton>

			<div className="grid">
				{data &&
					data.map((planet) => (
						<div className="card" key={planet.id}>
							<div className="card-header">{planet.name}</div>
							<div>
								<strong>Type:</strong> {planet.type}
							</div>
							<div>
								<strong>Mass:</strong> {planet.mass_earth} Earth masses
							</div>
							<div>
								<strong>Radius:</strong> {planet.radius_earth} Earth radii
							</div>
							<div>
								<strong>Habitable:</strong> {planet.habitable ? "Yes" : "No"}
							</div>
						</div>
					))}
			</div>
		</section>
	);
}
