"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, Global, css } from "@emotion/react";

const theme = {
    colors: { dark: "#656565", medium: "#808782", light: "#A6D3A0" },
};

export default function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <ThemeProvider theme={theme}>
            <Global
                styles={css`
          body {
            background: ${theme.colors.dark};
            color: ${theme.colors.light};
          }
        `}
            />
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </ThemeProvider>
    );
}
