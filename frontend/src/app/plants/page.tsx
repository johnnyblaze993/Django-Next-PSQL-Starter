"use client";

import { Grid, Card, Heading, Description, CardHeader } from "@/components/ui";
import { Tooltip } from "@/components/Tooltip";
import { BackButton } from "@/components/BackButton";

const plants = [
  { id: 1, name: "Aloe Vera", description: "Soothing succulent." },
  { id: 2, name: "Snake Plant", description: "Hardy and air-purifying." },
  { id: 3, name: "Peace Lily", description: "Elegant flowering plant." },
];

export default function PlantsPage() {
  return (
    <section>
      <Heading>Plants</Heading>
      <Description>Explore our small collection of starter plants.</Description>
      <Grid>
        {plants.map((plant) => (
          <Tooltip key={plant.id} text="Styled with Emotion">
            <Card>
              <CardHeader as="h2">{plant.name}</CardHeader>
              <p>{plant.description}</p>
            </Card>
          </Tooltip>
        ))}
      </Grid>
      <BackButton href="/">Back to Home</BackButton>
    </section>
  );
}
