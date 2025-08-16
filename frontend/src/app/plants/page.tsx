"use client";

import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const plants = [
  { id: 1, name: "Aloe Vera", description: "Soothing succulent." },
  { id: 2, name: "Snake Plant", description: "Hardy and air-purifying." },
  { id: 3, name: "Peace Lily", description: "Elegant flowering plant." },
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const Card = styled.div`
  background: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.dark};
  padding: 1rem;
  border-radius: 8px;
`;

export default function PlantsPage() {
  return (
    <section>
      <h1
        css={css`
          color: ${(theme) => theme.colors.light};
        `}
      >
        Plants
      </h1>
      <p>Explore our small collection of starter plants.</p>
      <Grid>
        {plants.map((plant) => (
          <Card key={plant.id}>
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
          </Card>
        ))}
      </Grid>
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </section>
  );
}

