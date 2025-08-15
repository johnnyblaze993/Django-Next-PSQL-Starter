// src/components/Loading.tsx
import React from "react";
import "@/styles/components.css";

export function Loading() {
	return (
		<div className="loader-container">
			<div className="galaxy-spinner" aria-label="Loading"></div>
			<div className="loading-text">Loading...</div>
		</div>
	);
}
