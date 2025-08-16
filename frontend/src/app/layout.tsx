<<<<<<< HEAD
// no "use client"
import type { Metadata } from "next";
import Providers from "./providers/Providers";
=======
// src/app/layout.tsx
'use client'
import QueryProvider from "./providers/QueryProvider";
import { ThemeProvider, Global, css } from "@emotion/react";
>>>>>>> 37e6f131f0035b71ca115160ea714bf47caa6392

import "@/styles/global.css";
import "@/styles/layout.css";
import "@/styles/components.css";

export const metadata: Metadata = {
        title: "Plant Store Starter",
        description: "Demo application showcasing plants with Next.js and Django",
};

<<<<<<< HEAD
export default function RootLayout({ children }: { children: React.ReactNode }) {
=======
export default function RootLayout({
        children,
}: {
        children: React.ReactNode;
}) {
>>>>>>> 37e6f131f0035b71ca115160ea714bf47caa6392
        return (
                <html lang="en">
                        <body>
                                <Providers>
                                        <div className="layout-wrapper">
                                                <header className="nav-header">
                                                        <span role="img" aria-label="galaxy" style={{ fontSize: 32, marginRight: 8, filter: "drop-shadow(0 1px 4px rgba(248, 248, 248, 0.53))" }}>
                                                                🌱
                                                        </span>
                                                        Plant Store Demo
                                                </header>
                                                <main className="content">{children}</main>
                                                <footer className="footer">Dev environment</footer>
                                        </div>
                                </Providers>
                        </body>
                </html>
        );
}
