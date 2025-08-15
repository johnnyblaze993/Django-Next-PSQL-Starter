// src/app/page.tsx
import "@/styles/components.css";
import "@/styles/global.css";

export default function HomePage() {
	return (
		<section>
			{/* <h1 className="heading">Welcome to the Cosmic Data Explorer</h1> */}

			<div className="description-block">
				<p>
					<span className="highlight">Docker</span>,{" "}
					<span className="highlight">Django</span>, and
					<span className="highlight"> Next.js</span> power this environment,
					offering a seamless full-stack experience for discovery and
					experimentation.
				</p>
				<p
					style={{ marginTop: "1.5rem", fontWeight: 700, textAlign: "center" }}
				>
					Select an option below.
				</p>
			</div>

			<div className="grid">
				<a href="/galaxies" className="link">
					Galaxies
				</a>
				<a href="/stars" className="link">
					Stars
				</a>
				<a href="/planets" className="link">
					Planets
				</a>
				<a href="/blackholes" className="link">
					Black Holes
				</a>
			</div>
		</section>
	);
}
