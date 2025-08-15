"use client";
import { BackButton } from "@/components/BackButton";
import { Loading } from "@/components/Loading";
import { useStars } from "@/features/stars/useStars";
import "@/styles/components.css";

export default function StarsPage() {
	const { data, isLoading, isError } = useStars();

	if (isLoading) return <Loading />;
	{
		isError && <div>Error loading stars.</div>;
	}
	return (
		<section>
			<h1 className="heading">Stars</h1>
			<p className="mb-2 description">
				Browse the notable stars in our database.
			</p>
			<BackButton href="/">Back to Home</BackButton>

			<div className="grid">
				{data &&
					data.map((star) => (
						<div className="card" key={star.id}>
							<div className="card-header">{star.name}</div>
							<div>
								<strong>Type:</strong> {star.type}
							</div>
							<div>
								<strong>Mass:</strong> {star.mass_solar} solar masses
							</div>
							<div>
								<strong>Radius:</strong> {star.radius_solar} solar radii
							</div>
							<div className="description">{star.description}</div>
						</div>
					))}
			</div>
		</section>
	);
}
