"use client";

import { CacheProvider, ThemeProvider, Global, css } from "@emotion/react";
import createCache from "@emotion/cache";
import React from "react";
import QueryProvider from "./QueryProvider";

const cache = createCache({ key: "css", prepend: true });

export const theme = {
    colors: {
        accent: "#BFA181", // gold accent
        dark: "#23272F",   // deep slate
        light: "#F5F5F3",  // off-white
        medium: "#6C757D", // muted slate
        green: "#3A5A40",  // elegant green
        greenLight: "#A3B18A", // soft green
    },
    font: {
        family: '"Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
        heading: '"Playfair Display", serif',
    },
};

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <Global styles={css`html,body{margin:0;padding:0;}`} />
                <QueryProvider>
                    {children}
                </QueryProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}
