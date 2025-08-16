"use client";

import Link from "next/link";
import { css } from "@emotion/react";

export default function TutorialNext() {
  return (
    <section>
      <h1
        css={css`
          color: ${(theme) => theme.colors.light};
        `}
      >
        Next Page
      </h1>
      <p>This is a nested route under /tutorial/next.</p>
      <p>
        <Link href="/tutorial">Back to tutorial home</Link>
      </p>
    </section>
  );
}

