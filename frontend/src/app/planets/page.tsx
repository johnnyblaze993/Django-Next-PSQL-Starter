"use client";
import { BackButton } from "@/components/BackButton";
import { Loading } from "@/components/Loading";
import { usePlanets } from "@/features/planets/usePlanets";
import { Heading, Description, Grid, Card, CardHeader } from "@/components/ui";

export default function PlanetsPage() {
        const { data, isLoading, isError } = usePlanets();

        if (isLoading) return <Loading />;
        if (isError) return <div>Error loading planets.</div>;
        return (
                <section>
                        <Heading>Planets</Heading>
                        <Description>
                                Discover the planets across various stars and galaxies.
                        </Description>
                        <BackButton href="/">Back to Home</BackButton>

                        <Grid>
                                {data &&
                                        data.map((planet) => (
                                                <Card key={planet.id}>
                                                        <CardHeader>{planet.name}</CardHeader>
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
                                                </Card>
                                        ))}
                        </Grid>
                </section>
        );
}
