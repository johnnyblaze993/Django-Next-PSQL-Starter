// no "use client"
import type { Metadata } from "next";
import Providers from "./providers/Providers";

import "@/styles/global.css";
import "@/styles/layout.css";
import "@/styles/components.css";

export const metadata: Metadata = {
        title: "Plant Store Starter",
        description: "Demo application showcasing plants with Next.js and Django",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
