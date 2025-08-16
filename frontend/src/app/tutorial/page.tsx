"use client";

import { Heading, Description, Grid, Card, CardHeader } from "@/components/ui";
import { BackButton } from "@/components/BackButton";
import { Loading } from "@/components/Loading";
import { useCareTips } from "@/features/careTips/useCareTips";

export default function TutorialHome() {
  const { data, isLoading, isError } = useCareTips();
  if (isLoading) return <Loading />;
  if (isError) return <div>Error loading care tips.</div>;

  return (
    <section>
      <Heading>Plant Care Tips</Heading>
      <Description>Helpful advice to keep your plants thriving.</Description>
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
