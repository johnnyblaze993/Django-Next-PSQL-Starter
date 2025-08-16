"use client";

import { CacheProvider, ThemeProvider, Global, css } from "@emotion/react";
import createCache from "@emotion/cache";
import React from "react";

const cache = createCache({ key: "css", prepend: true });

export const theme = {
    colors: {
        accent: "#1B56FD",   // <-- REQUIRED by LayoutShell
        dark: "#0A0A0A",
        light: "#F7F7F7",
        medium: "#808782",
    },
};

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <Global styles={css`html,body{margin:0;padding:0;}`} />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}
