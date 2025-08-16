// src/app/layout.tsx
'use client'
import QueryProvider from "./providers/QueryProvider";
import { ThemeProvider, Global, css } from "@emotion/react";

// Optional: legacy css imports retained for base layout
import "@/styles/global.css";
import "@/styles/layout.css";
import "@/styles/components.css";

const theme = {
        colors: {
                dark: "#656565",
                medium: "#808782",
                light: "#A6D3A0",
        },
};

export const metadata = {
        title: "Plant Store Starter",
        description: "Demo application showcasing plants with Next.js and Django",
};

export default function RootLayout({
        children,
}: {
        children: React.ReactNode;
}) {
        return (
                <html lang="en">
                        <body>
                                <ThemeProvider theme={theme}>
                                        <Global
                                                styles={css`
                                                        body {
                                                                background: ${theme.colors.dark};
                                                                color: ${theme.colors.light};
                                                        }
                                                `}
                                        />
                                        <QueryProvider>
                                                <div className="layout-wrapper">
                                                        <header className="nav-header">
                                                                <span
                                                                        role="img"
                                                                        aria-label="galaxy"
                                                                        style={{
                                                                                fontSize: 32,
                                                                                marginRight: 8,
                                                                                filter: "drop-shadow(0 1px 4pxrgba(248, 248, 248, 0.53))",
                                                                        }}
                                                                >
                                                                        🌱
                                                                </span>
                                                                Plant Store Demo
                                                        </header>
                                                        <main className="content">{children}</main>
                                                        <footer className="footer">Dev environment</footer>
                                                </div>
                                        </QueryProvider>
                                </ThemeProvider>
                        </body>
                </html>
        );
}
