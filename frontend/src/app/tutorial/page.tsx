"use client";

import { Heading, LinkButton } from "@/components/ui";
import { Tooltip } from "@/components/Tooltip";

export default function TutorialHome() {
  return (
    <section>
      <Heading>Tutorial Home</Heading>
      <p>This page demonstrates basic routing in Next.js.</p>
      <Tooltip text="Next.js Link component for navigation">
        <LinkButton href="/tutorial/next">Go to next page</LinkButton>
      </Tooltip>
    </section>
  );
}
