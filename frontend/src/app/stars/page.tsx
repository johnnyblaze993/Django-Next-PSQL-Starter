"use client";
import { BackButton } from "@/components/BackButton";
import { Loading } from "@/components/Loading";
import { useStars } from "@/features/stars/useStars";
import { Heading, Description, Grid, Card, CardHeader } from "@/components/ui";

export default function StarsPage() {
        const { data, isLoading, isError } = useStars();

        if (isLoading) return <Loading />;
        if (isError) return <div>Error loading stars.</div>;
        return (
                <section>
                        <Heading>Stars</Heading>
                        <Description>Browse the notable stars in our database.</Description>
                        <BackButton href="/">Back to Home</BackButton>

                        <Grid>
                                {data &&
                                        data.map((star) => (
                                                <Card key={star.id}>
                                                        <CardHeader>{star.name}</CardHeader>
                                                        <div>
                                                                <strong>Type:</strong> {star.type}
                                                        </div>
                                                        <div>
                                                                <strong>Mass:</strong> {star.mass_solar} solar masses
                                                        </div>
                                                        <div>
                                                                <strong>Radius:</strong> {star.radius_solar} solar radii
                                                        </div>
                                                        <div>{star.description}</div>
                                                </Card>
                                        ))}
                        </Grid>
                </section>
        );
}
