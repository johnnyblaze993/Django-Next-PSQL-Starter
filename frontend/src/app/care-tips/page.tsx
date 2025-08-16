"use client";

import { useCareTips } from "@/features/careTips/useCareTips";
import { Grid, Card, Heading, Description, CardHeader } from "@/components/ui";
import { Loading } from "@/components/Loading";
import { BackButton } from "@/components/BackButton";

export default function CareTipsPage() {
    const { data, isLoading, isError } = useCareTips();
    if (isLoading) return <Loading />;
    if (isError) return <div>Error loading care tips.</div>;

    return (
        <section>
            <Heading>Care Tips</Heading>
            <Description>Helpful tips for keeping your plants healthy.</Description>
            <Grid>
                {data?.map((tip) => (
                    <Card key={tip.id}>
                        <CardHeader as="h2">{tip.title}</CardHeader>
                        <p>{tip.content}</p>
                    </Card>
                ))}
            </Grid>
            <BackButton href="/">Back to Home</BackButton>
        </section>
    );
}
