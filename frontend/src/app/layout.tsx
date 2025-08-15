// src/app/layout.tsx
import QueryProvider from "./providers/QueryProvider";
import "@/styles/global.css";
import "@/styles/layout.css";
import "@/styles/components.css";

export const metadata = {
	title: "Cosmic Data Explorer",
	description:
		"Galaxy, planet, star, and black hole database for modern dev demos",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
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
								🌠
							</span>
							Test Application Template
						</header>
						<main className="content">{children}</main>
						<footer className="footer">Dev environment</footer>
					</div>
				</QueryProvider>
			</body>
		</html>
	);
}
