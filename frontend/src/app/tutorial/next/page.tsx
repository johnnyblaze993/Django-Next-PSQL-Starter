/** @jsxImportSource @emotion/react */
"use client";

import Link from "next/link";
import { css, useTheme } from "@emotion/react";

export default function TutorialNext() {
  const theme = useTheme();
  
  return (
    <section>
      <h1
        css={css`
          color: ${theme.colors.light};
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

