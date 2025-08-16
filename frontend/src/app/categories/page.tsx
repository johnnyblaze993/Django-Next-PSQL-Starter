"use client";

import { useCategories } from "@/features/categories/useCategories";
import { Grid, Card, Heading, Description, CardHeader } from "@/components/ui";
import { Loading } from "@/components/Loading";
import { BackButton } from "@/components/BackButton";

export default function CategoriesPage() {
    const { data, isLoading, isError } = useCategories();
    if (isLoading) return <Loading />;
    if (isError) return <div>Error loading categories.</div>;

    return (
        <section>
            <Heading>Categories</Heading>
            <Description>Browse all plant categories in our store.</Description>
            <Grid>
                {data?.map((cat) => (
                    <Card key={cat.id}>
                        <CardHeader as="h2">{cat.name}</CardHeader>
                        <p>{cat.description}</p>
                    </Card>
                ))}
            </Grid>
            <BackButton href="/">Back to Home</BackButton>
        </section>
    );
}
