"use client";

import Link from "next/link";
import { css } from "@emotion/react";

export default function TutorialHome() {
  return (
    <section>
      <h1
        css={css`
          color: ${(theme) => theme.colors.light};
        `}
      >
        Tutorial Home
      </h1>
      <p>This page demonstrates basic routing in Next.js.</p>
      <p>
        <Link href="/tutorial/next">Go to next page</Link>
      </p>
    </section>
  );
}

