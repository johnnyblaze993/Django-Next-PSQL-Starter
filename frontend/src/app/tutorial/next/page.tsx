"use client";

import { Heading, LinkButton } from "@/components/ui";
import { Tooltip } from "@/components/Tooltip";

export default function TutorialNext() {
  return (
    <section>
      <Heading>Next Page</Heading>
      <p>This is a nested route under /tutorial/next.</p>
      <Tooltip text="Back with Next.js Link">
        <LinkButton href="/tutorial">Back to tutorial home</LinkButton>
      </Tooltip>
    </section>
  );
}
