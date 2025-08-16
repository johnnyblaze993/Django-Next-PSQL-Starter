import type { Metadata } from "next";
import Providers from "./providers/Providers";
import LayoutShell from "./LayoutShell";

export const metadata: Metadata = {
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
                <Providers>
                    <LayoutShell>{children}</LayoutShell>
                </Providers>
            </body>
        </html>
    );
}

