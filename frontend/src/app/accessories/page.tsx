"use client";

import { useAccessories } from "@/features/accessories/useAccessories";
import { Grid, Card, Heading, Description, CardHeader } from "@/components/ui";
import { Loading } from "@/components/Loading";
import { BackButton } from "@/components/BackButton";

export default function AccessoriesPage() {
    const { data, isLoading, isError } = useAccessories();
    if (isLoading) return <Loading />;
    if (isError) return <div>Error loading accessories.</div>;

    return (
        <section>
            <Heading>Accessories</Heading>
            <Description>All accessories available for your plants.</Description>
            <Grid>
                {data?.map((acc) => (
                    <Card key={acc.id}>
                        <CardHeader as="h2">{acc.name}</CardHeader>
                        <p>{acc.description}</p>
                        <p><strong>Price:</strong> ${Number(acc.price).toFixed(2)}</p>
                    </Card>
                ))}
            </Grid>
            <BackButton href="/">Back to Home</BackButton>
        </section>
    );
}
