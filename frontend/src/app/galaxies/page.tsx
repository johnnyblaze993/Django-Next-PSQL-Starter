"use client";

import { BackButton } from "@/components/BackButton";
import { Loading } from "@/components/Loading";
import { useGalaxies } from "@/features/galaxies/useGalaxies";
import { Heading, Description, Grid, Card, CardHeader } from "@/components/ui";

export default function GalaxiesPage() {
        const { data, isLoading, isError } = useGalaxies();
        if (isLoading) return <Loading />;
        if (isError) return <div>Error loading galaxies.</div>;
        return (
                <section>
                        <Heading>Galaxies</Heading>
                        <Description>
                                Explore the galaxies in our Astronomy Data Explorer.
                        </Description>
                        <BackButton href="/">Back to Home</BackButton>

                        <Grid>
                                {data &&
                                        data.map((galaxy) => (
                                                <Card key={galaxy.id}>
                                                        <CardHeader>{galaxy.name}</CardHeader>
                                                        <div>
                                                                <strong>Type:</strong> {galaxy.type}
                                                        </div>
                                                        <div>
                                                                <strong>Distance:</strong> {galaxy.distance_mly} million light years
                                                        </div>
                                                        <div>{galaxy.description}</div>
                                                </Card>
                                        ))}
                        </Grid>
                </section>
        );
}
