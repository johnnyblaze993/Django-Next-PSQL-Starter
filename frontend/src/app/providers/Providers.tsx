"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, Global, css, Theme } from "@emotion/react";

const theme: Theme = {
    colors: {
        dark: "#1B5E20",
        medium: "#81C784",
        light: "#F1F8E9",
        accent: "#4CAF50",
    },
};

export default function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <ThemeProvider theme={theme}>
            <Global
                styles={css`
                    *, *::before, *::after {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }
                    body {
                        background: ${theme.colors.light};
                        color: ${theme.colors.dark};
                        font-family: system-ui, sans-serif;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }
                    a {
                        color: inherit;
                        text-decoration: none;
                    }
                `}
            />
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </ThemeProvider>
    );
}
