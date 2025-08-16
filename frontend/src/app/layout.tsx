"use client";

import type { Metadata } from "next";
import Providers from "./providers/Providers";
import styled from "@emotion/styled";
import { ThemeProvider, Theme } from "@emotion/react";

declare module "@emotion/react" {
        export interface Theme {
                colors: {
                        accent: string;
                        dark: string;
                        light: string;
                };
        }
}

const theme: Theme = {
        colors: {
                accent: "#ff6347",
                dark: "#333",
                light: "#f4f4f4",
        },
};

export const metadata: Metadata = {
        title: "Plant Store Starter",
        description: "Demo application showcasing plants with Next.js and Django",
};

const LayoutWrapper = styled.div`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
`;

const NavHeader = styled.header`
        background: ${({ theme }) => theme.colors.accent};
        color: #fff;
        padding: 28px 16px 24px 16px;
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: 0.05em;
`;

const Content = styled.main`
        flex: 1;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 32px 16px;
`;

const Footer = styled.footer`
        background: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.light};
        text-align: center;
        font-size: 1rem;
        padding: 16px 0 18px 0;
        letter-spacing: 0.04em;
`;

export default function RootLayout({
        children,
}: {
        children: React.ReactNode;
}) {
        return (
                <ThemeProvider theme={theme}>
                        <html lang="en">
                                <body>
                                        <Providers>
                                                <LayoutWrapper>
                                                        <NavHeader>
                                                                <span role="img" aria-label="plant" style={{ fontSize: 32, marginRight: 8 }}>
                                                                        🌱
                                                                </span>
                                                                Plant Store Demo
                                                        </NavHeader>
                                                        <Content>{children}</Content>
                                                        <Footer>Dev environment</Footer>
                                                </LayoutWrapper>
                                        </Providers>
                                </body>
                        </html>
                </ThemeProvider>
        );
}
