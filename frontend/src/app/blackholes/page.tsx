"use client";
import { BackButton } from "@/components/BackButton";
import { Loading } from "@/components/Loading";
import { useBlackHoles } from "@/features/blackholes/useBlackHole";
import { Heading, Description, Grid, Card, CardHeader } from "@/components/ui";

export default function BlackHolesPage() {
        const { data, isLoading, isError } = useBlackHoles();
        if (isLoading) return <Loading />;
        if (isError) return <div>Error loading black holes.</div>;
        return (
                <section>
                        <Heading>Black Holes</Heading>
                        <Description>
                                Explore the black holes cataloged in our universe.
                        </Description>
                        <BackButton href="/">Back to Home</BackButton>

                        <Grid>
                                {data &&
                                        data.map((bh) => (
                                                <Card key={bh.id}>
                                                        <CardHeader>{bh.name}</CardHeader>
                                                        <div>
                                                                <strong>Type:</strong> {bh.type}
                                                        </div>
                                                        <div>
                                                                <strong>Mass:</strong> {bh.mass_solar} solar masses
                                                        </div>
                                                        <div>
                                                                <strong>Distance from center:</strong> {bh.distance_from_center_ly}
                                                                {" "}light years
                                                        </div>
                                                        <div>{bh.description}</div>
                                                </Card>
                                        ))}
                        </Grid>
                </section>
        );
}
