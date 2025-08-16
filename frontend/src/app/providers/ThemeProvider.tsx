// src/app/providers/ThemeProvider.tsx
"use client";
import { ThemeProvider as EmotionThemeProvider, Global, css } from "@emotion/react";
import { ReactNode } from "react";

const theme = {
	colors: {
		dark: "#656565",
		medium: "#808782",
		light: "#A6D3A0",
	},
};

export default function ThemeProvider({ children }: { children: ReactNode }) {
	return (
		<EmotionThemeProvider theme={theme}>
			<Global
				styles={css`
					body {
						background: ${theme.colors.dark};
						color: ${theme.colors.light};
					}
				`}
			/>
			{children}
		</EmotionThemeProvider>
	);
}