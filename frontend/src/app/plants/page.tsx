"use client";

import { Grid, Card, Heading, Description, CardHeader } from "@/components/ui";
import { Tooltip } from "@/components/Tooltip";
import { BackButton } from "@/components/BackButton";
import { Loading } from "@/components/Loading";
import { usePlants } from "@/features/plants/usePlants";

export default function PlantsPage() {
  const { data, isLoading, isError } = usePlants();
  if (isLoading) return <Loading />;
  if (isError) return <div>Error loading plants.</div>;

  return (
    <section>
      <Heading>Plants</Heading>
      <Description>Explore our collection of starter plants.</Description>
      <Grid>
        {data?.map((plant) => (
          <Tooltip key={plant.id} text={plant.scientific_name}>
            <Card>
              <CardHeader as="h2">{plant.name}</CardHeader>
              <p>{plant.description}</p>
              <p><strong>Price:</strong> ${Number(plant.price).toFixed(2)}</p>
              {plant.accessories.length > 0 && (
                <p>
                  <strong>Accessories:</strong> {plant.accessories.map((a) => a.name).join(", ")}
                </p>
              )}
            </Card>
          </Tooltip>
        ))}
      </Grid>
      <BackButton href="/">Back to Home</BackButton>
    </section>
  );
}
